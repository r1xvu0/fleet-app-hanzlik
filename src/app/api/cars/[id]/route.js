// app/api/cars/[id]/route.js
export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const backendUrl = process.env.BACKEND_API_URL || 'http://localhost:8080';
    
    const response = await fetch(`${backendUrl}/api/cars/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return Response.json(
        { error: 'Car not found' },
        { status: response.status }
      );
    }

    const car = await response.json();
    return Response.json(car);
  } catch (error) {
    console.error('Car API error:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}