// app/api/contact/route.js
export async function POST(request) {
  try {
    const body = await request.json();
    console.log('Contact form data received:', body);
    
    const backendUrl = process.env.BACKEND_API_URL || 'http://localhost:8080';
    console.log('Sending to backend:', `${backendUrl}/api/contact`);
    
    const response = await fetch(`${backendUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    console.log('Backend response status:', response.status);

    // Try to parse response as JSON
    let data;
    const responseText = await response.text();
    console.log('Backend response text:', responseText);
    
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse backend response as JSON:', parseError);
      return Response.json(
        { error: 'Backend returned invalid response: ' + responseText },
        { status: 500 }
      );
    }

    if (!response.ok) {
      console.error('Backend error:', data);
      return Response.json(
        { error: data.error || 'Failed to submit contact form' },
        { status: response.status }
      );
    }

    console.log('Contact form submitted successfully:', data);
    return Response.json(data);
  } catch (error) {
    console.error('Contact API error:', error);
    return Response.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    );
  }
}