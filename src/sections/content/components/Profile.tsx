import profile from "../../../assets/png/profile.png";

const Profile = () => {
  return (
    <section aria-labelledby="profile" className="block">
      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        <img
          src={profile}
          alt="Profile avatar"
          className="w-24 h-24 rounded-3xl object-cover shrink-0"
        />

        <div className="flex flex-col gap-2 min-w-0">
          <h2 id="profile" className="title-xl">
            Timur Nazipov
          </h2>
          <div className="text-left">
            <a
              href="mailto:timurnazipov@gmail.com"
              className="text-neutral-300 hover:text-white transition"
            >
              timurnazipov@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-neutral-200/90 leading-relaxed max-w-[60ch]">
          Frontend Engineer building high-performance, AI-powered web apps with
          React, Vue, and TypeScript. Focused on clean architecture, real-world
          impact, and shipping things that actually work.
        </p>
      </div>
    </section>
  );
};

export default Profile;
