import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Eduard Tanase
      </h1>
      <p className="mb-4">
        {`I'm a Computer Engineering student at Purdue University, currently studying abroad at the National University of Singapore. 
        I am passionate about exploring the intersection of hardware and software, especially in Computational Neuroscience, 
        Embedded Systems, and Full-Stack Development. In my free time, I enjoy gaming, playing guitar, and working out.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
