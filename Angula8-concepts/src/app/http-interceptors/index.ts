import { HTTP_INTERCEPTORS } from '@angular/common/http';

// import { AuthInterceptor } from './auth-interceptor';
// import { ApiPrefixInterceptor } from './api-prefix.interceptor';
// import { HttpErrorInterceptor } from './http-error.interceptor';
import { FakeBackendInterceptorService } from './fake-backend-interceptor.service';
import { ErrorIntercept } from './error.interceptor';

export const httpInterceptorProviders = [
    //   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    //   { provide: HTTP_INTERCEPTORS, useClass: ApiPrefixInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorIntercept, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptorService, multi: true },
];