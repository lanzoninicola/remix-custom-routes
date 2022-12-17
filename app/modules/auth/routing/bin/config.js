/**
 * https://remix.run/docs/en/v1/file-conventions/remix-config#routes
 *
 * @param {object} defineRoutes
 * @returns
 */

exports.routes = (defineRoutes) => {
  return defineRoutes((route) => {
    const baseFileSystemPath = "modules/auth/routing/routes";

    route("auth", `${baseFileSystemPath}/auth.tsx`, () => {
      /** Do not remove the "/"" at the start of path */
      /** An absolute child route path must start with the combined path of all its parent routes */
      route("/auth/login", `${baseFileSystemPath}/auth/login.tsx`);
    });
  });
};
