import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { urlList } = await req.json();

    if (!urlList || !Array.isArray(urlList)) {
      return NextResponse.json({ error: 'urlList is required and must be an array' }, { status: 400 });
    }

    const payload = {
      host: 'lattab.vercel.app',
      key: '23640b5098f44acf92740b8ccee9f405',
      keyLocation: 'https://lattab.vercel.app/23640b5098f44acf92740b8ccee9f405.txt',
      urlList: urlList,
    };

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return NextResponse.json({ success: true, message: 'URLs submitted to IndexNow' });
    } else {
      const errorText = await response.text();
      return NextResponse.json({ success: false, error: errorText }, { status: response.status });
    }
  } catch (error) {
    console.error('IndexNow Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
