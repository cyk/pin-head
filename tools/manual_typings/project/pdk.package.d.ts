declare module PDK {
  export function init(config: Object): void;
  export function login(scope: Object, callback: RequestCallback): void;
  export function logout(callback: RequestCallback): void;
  export function getSession(): Object;
  export function me(path: string, data: Object, callback: RequestCallback): void;
  export function request(path: string, data: Object, callback: RequestCallback): void;
  interface RequestCallback { (response: any): void; }
}
