const STORAGE_KEY = 'acm_user_data';

export interface UserData {
  email: string;
  first_name: string;
}

export function saveUserData(email: string, firstName: string): boolean {
  try {
    const userData: UserData = {
      email,
      first_name: firstName,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    return true;
  } catch (error) {
    console.error('Failed to save user data to localStorage:', error);
    return false;
  }
}

export function getUserData(): UserData | null {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      return null;
    }
    return JSON.parse(data) as UserData;
  } catch (error) {
    console.error('Failed to retrieve user data from localStorage:', error);
    return null;
  }
}

export function clearUserData(): boolean {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Failed to clear user data from localStorage:', error);
    return false;
  }
}
