import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';


let locales = ['en', 'zh']


function getLocale(request: NextRequest) {
    let headers = { headers: { 'Accept-Language': 'en-US,en; q=0.5' }} as any;
    let languages = new Negotiator(headers).languages();
    let defaultLocale = 'en';

    const locale = match(languages, locales, defaultLocale);
    return locale
}


export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    console.log("pathname: ", pathname)
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)
        const url = new URL(`/${locale}/${pathname}`, request.url)
        console.log("URL: ", url)
        return NextResponse.redirect(url)
    }
}