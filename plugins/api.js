import Auth from "@/api/auth";

export default (context, inject) => {
  const factories = {
    auth: Auth(context.$axios),
  };

  inject("api", factories);
};
