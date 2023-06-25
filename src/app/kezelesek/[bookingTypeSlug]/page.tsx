import { getBookingTypes } from '@/api/tidy-cal';
import Link from 'next/link';
import Script from 'next/script';
import { FiArrowLeft } from 'react-icons/fi';

interface PageProps {
  params: {
    bookingTypeSlug: string;
  };
}

const SingleBookingType = async ({
  params: { bookingTypeSlug },
}: PageProps) => {
  const { data } = await getBookingTypes();

  const [singleBookingType] = data.filter(
    ({ url_slug }) => url_slug === bookingTypeSlug,
  );

  const {
    title,
    description,
    user: { vanity_path },
    url_slug,
  } = singleBookingType;

  return (
    <main className="h-full p-10">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-blue-500 underline underline-offset-2"
      >
        <FiArrowLeft />
        <span>Vissza a kezelésekhez</span>
      </Link>
      <h1 className="py-4 text-2xl font-bold">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      {/* <div id="tidycal-embed" data-path={`${vanity_path}/${url_slug}`}></div> */}
    </main>
  );
};

export default SingleBookingType;
