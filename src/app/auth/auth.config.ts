interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'RZeoBx5OUXHv48QPTIuIYLcojCkG6xRW',
  domain: 'employeemgr.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
