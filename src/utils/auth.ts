import decode from 'jwt-decode';

class AuthService {
  getProfile(): string {
    return decode(this.getToken() || 'Not Logged In');
  }

  loggedIn(): boolean {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isServiceManager(): boolean {
    return this.isAdmin() || (this.loggedIn() && true);
  }

  isAdmin(): boolean {
    return this.loggedIn() && false;
  }

  isTokenExpired(token: string): boolean {
    try {
      const decoded: any = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return true;
    }
  }

  getToken(): string {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token') || '';
  }

  login(idToken: string): void {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);

    window.location.assign('/');
  }

  logout(): void {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }
}

export default new AuthService();
