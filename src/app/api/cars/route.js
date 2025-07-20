// app/api/cars/route.js
export async function GET() {
  try {
    const backendUrl = process.env.BACKEND_API_URL || 'http://localhost:8080';
    
    const response = await fetch(`${backendUrl}/api/cars`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return Response.json(
        { error: 'Failed to fetch cars' },
        { status: response.status }
      );
    }

    const cars = await response.json();
    return Response.json(cars);
  } catch (error) {
    console.error('Cars API error:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}