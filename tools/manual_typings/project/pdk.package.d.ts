declare module PDK {
  export function init(config: Object): void;
  export function login(scope: Object, callback: RequestCallback): void;
  export function logout(callback: RequestCallback): void;
  export function getSession(): Object;
  interface RequestCallback { (response: any): void; }
}
