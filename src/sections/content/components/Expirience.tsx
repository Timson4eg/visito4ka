const Expirince = () => {
  return (
    <section className="block">
      <h2 className="title-xl ">Projects & Highlights</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-3 text-sm leading-relaxed font-inter">
        <li>
          Integrated{" "}
          <span className="text-indigo-400">AI-powered automation</span>
          into enterprise workflows — reduced manual input by{" "}
          <strong>37%</strong> and boosted team productivity.
        </li>
        <li>
          Built reusable <span className="text-indigo-400">UI components</span>{" "}
          & utilities for an internal design system, ensuring consistent look
          and feel across multiple products.
        </li>
        <li>
          Extended an open-source{" "}
          <span className="text-indigo-400">speech-to-text engine</span> to
          enable voice input in web apps, improving accessibility by{" "}
          <strong>20%</strong>.
        </li>
        <li>
          Developed a fault-tolerant{" "}
          <span className="text-indigo-400">AWS S3 file upload system</span>
          with multipart uploads, improving stability for{" "}
          <strong>1GB+ media files</strong> by ~40%.
        </li>
        <li>
          Enhanced app performance with{" "}
          <span className="text-indigo-400">
            lazy loading, dynamic imports, debouncing
          </span>
          ; built drag-and-drop file & table interactions with real-time REST
          API sync.
        </li>
        <li>
          Collaborated in <span className="text-indigo-400">Figma</span> to
          translate design specs into responsive,{" "}
          <strong>WCAG-compliant UI</strong>, using TailwindCSS and scalable
          architecture.
        </li>
      </ul>
    </section>
  );
};

export default Expirince;
