import Image from "next/image";
import { useEmblaCarousel } from "embla-carousel/react";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

export default function Hero(props) {

  // emblaRef will be a reference to our carousel viewport
  const [emblaRef, embla] = useEmblaCarousel({

    align: "start",
    // aligns the first slide to the start
    // of the viewport else will align it to the middle.

    loop: true,
    // we need the carousel to loop to the
    // first slide once it reaches the last slide.

    skipSnaps: false,
    // Allow the carousel to skip scroll snaps if
    // it's dragged vigorously.

    inViewThreshold: 0.7,
    // percentage of a slide that need's to be visible
    // inorder to be considered in view, 0.7 is 70%.
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // this function allow's us to scroll to the slide whose
  // id correspond's to the id of the navigation dot when we
  // click on it.

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  // set the id of the current slide to active id
  // we need it to correctly highlight it's corresponding
  // navigation dot.

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  // make sure embla is mounted and return true operation's
  // can be only performed on it if it's successfully mounted.

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (<div className="py-12 mx-auto max-w-6xl px-5">
  {/* title */}
  <div className="flex justify-center items-center pb-10">
    <h2 className="text-center text-black dark:text-gray-100 text-4xl font-bold">
      Trending
    </h2>
  </div>

  // Carousel viewport
  <div className="overflow-hidden" ref={emblaRef}>
  // Carousel container
    <div className="flex">
    // Carousel slide's
      {props.posts.map((post) => (
        <div
          className="relative flex flex-none flex-wrap lg:flex-nowrap w-full mx-10"
          key={post.title}
        >
          <div className="overflow-hidden cursor-pointer lg:w-1/2">
            <Link href={`/blog/${post.slug}`}>
              <a>
                <Image
                  src={post.image_cover}
                  height={514}
                  width={800}
                  className="rounded-lg"
                  alt="cover image"
                  placeholder="blur"
                  blurDataURL={post.image_cover}
                />
              </a>
            </Link>
          </div>
          {/* content */}
          <div className="flex flex-col space-y-4 lg:w-4/5 lg:space-x-20 lg:justify-center">
            {/* tags and date */}
            <div className="flex text-sm mt-4 space-x-5 lg:mx-20">
              <p className="font-bold dark:text-white">{post.tags}</p>
              <p className="font-normal text-gray-500 dark:text-gray-400">
                {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
              </p>
            </div>
            {/* title */}
            <Link href={`/blog/${post.slug}`}>
              <a className="cursor-pointer">
                <h2 className="text-3xl lg:text-4xl font-bold dark:text-gray-100">
                  {post.title}
                </h2>
              </a>
            </Link>
            <Link href={`/blog/${post.slug}`}>
              <a className="cursor-pointer">
                <p className="text-gray-500 text-justify">{post.summary}</p>
              </a>
            </Link>
            <div className="flex items-center">
              <div className="h-12 w-12">
                <Image
                  src="/img/avatar-banner-360x360.png"
                  height="260"
                  width="260"
                  alt="avatar image"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col mx-4 space-y-1">
                <strong className="text-sm dark:text-gray-100">
                  {post.author}
                </strong>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {post.designation}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
)
}