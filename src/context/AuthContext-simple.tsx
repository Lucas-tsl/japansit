export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export const useAuth = () => {
  return {
    user: null,
    logout: () => {},
    login: () => {},
    signup: () => {},
  };
};
