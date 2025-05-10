import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Log the request body for debugging
    console.log('Contact form submission:', body);
    
    const backendUrl = process.env.BACKEND_API_URL || 'http://localhost:8080';
    
    const response = await fetch(`${backendUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body),
    });

    // Log the response status and headers
    console.log('Backend response status:', response.status);
    console.log('Backend response headers:', Object.fromEntries(response.headers.entries()));

    let data;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }
    
    // Log the response data
    console.log('Backend response data:', data);

    if (!response.ok) {
      return NextResponse.json(
        { 
          error: 'Failed to submit contact form',
          details: data,
          status: response.status,
          subscribed: false
        },
        { 
          status: response.status,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          }
        }
      );
    }

    // Check if data is already a parsed object or a string
    let responseObject = data;
    if (typeof data === 'string') {
      // Convert string to object with a message field
      responseObject = { message: data, subscribed: false };
    }

    // Make sure all required fields are present
    if (!responseObject.subscribed) {
      responseObject.subscribed = false;
    }

    return NextResponse.json(
      responseObject,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      }
    );
  } catch (error) {
    // Log the full error
    console.error('Error in contact form submission:', error);
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error.message,
        subscribed: false
      },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      }
    );
  }
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    }
  );
} 