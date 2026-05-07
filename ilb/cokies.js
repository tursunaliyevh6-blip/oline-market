import Cookies from "js-cookie";

const ACCESS = "access_token";
const REFRESH = "refresh_token";

export const tokenStore = {
  set(access, refresh) {
    Cookies.set(ACCESS, access, {
      expires: 3650,
      secure: true,
      sameSite: "Strict",
    });

    Cookies.set(REFRESH, refresh, {
      expires: 3650,
      secure: true,
      sameSite: "Strict",
    });
  },

  getAccess() {
    return Cookies.get(ACCESS);
  },

  getRefresh() {
    return Cookies.get(REFRESH);
  },

  clear() {
    Cookies.remove(ACCESS);
    Cookies.remove(REFRESH);
  },
};