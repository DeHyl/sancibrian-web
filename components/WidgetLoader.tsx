'use client';
import { useEffect } from 'react';

const WIDGET_URL = 'https://sancibrian.host-help.com/widget.js?slug=sancibrian';

export default function WidgetLoader() {
  useEffect(() => {
    if (document.getElementById('capitan-dd-widget')) return;
    const script = document.createElement('script');
    script.id = 'capitan-dd-widget';
    script.src = WIDGET_URL;
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return null;
}
