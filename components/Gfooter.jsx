export const Gfooter = () => {
  let version = process.env.npm_package_version;
  let name = process.env.npm_package_name;
  let appinfo = `${name} | v${version}`;
  return (
    <div className="font-semibold uppercase flex flex-row-reverse">
      <small className="px-4 py-2">{appinfo}</small>
      <small className="px-2 py-2 ">creado con 💕 por <a
      className="hover:text-pink-600 transition-colors"
      href="https://instagram.com/soprojectit"
      target={"_blank"}>
        soproject it, c.a</a> 
      </small>
    </div>
  );
};
