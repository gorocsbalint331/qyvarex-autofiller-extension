/**
 * Parcel module id: eJFqj
 * Resolved path: src/enums/http.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */

var n,o,i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r),i.export(r,"HTTP_STATUS_CODES",()=>n),i.export(r,"CUSTOM_ERROR_CODES",()=>o),i.export(r,"isAutofillTerminalHttpStatus",()=>s),i.export(r,"TIMEOUT_DURATION_MS",()=>u),function(e){e[e.BAD_REQUEST=400]="BAD_REQUEST",e[e.UNAUTHORIZED=401]="UNAUTHORIZED",e[e.PAYMENT_REQUIRED=402]="PAYMENT_REQUIRED",e[e.FORBIDDEN=403]="FORBIDDEN",e[e.INTERNAL_SERVER_ERROR=500]="INTERNAL_SERVER_ERROR",e.CLIENT_REQUEST_TIMEOUT="client_408"}(n||(n={})),function(e){e.RESUME_MISSING_KEY="errorCode: 40008",e.EXTENSION_CONTEXT_INVALIDATED="extension_context_invalidated",e.NO_ELEMENTS="NO_ELEMENTS"}(o||(o={}));let a=[n.BAD_REQUEST,n.PAYMENT_REQUIRED,n.FORBIDDEN,n.INTERNAL_SERVER_ERROR,n.CLIENT_REQUEST_TIMEOUT,o.EXTENSION_CONTEXT_INVALIDATED,o.NO_ELEMENTS];function l(e){if("string"!=typeof e)return e;let t=e.trim();return/^\d+$/.test(t)?Number(t):t}function s(e){return a.includes(l(e))}let u=6e4
