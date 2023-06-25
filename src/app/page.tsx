import { getBookingTypes } from '@/api/tidy-cal';
import { LuCalendarPlus } from 'react-icons/lu';
import Link from 'next/link';

export default async function Home() {
  const { data } = await getBookingTypes();

  console.log(data[5]);

  return (
    <main className="h-full bg-slate-100 p-4">
      <div className="container m-auto">
        <h1 className="pb-4 text-2xl font-semibold ">Green Point Beauty</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data
            .filter(({ disabled_at: disabledAt }) => !disabledAt)
            .map(({ id, title, url, description, url_slug }) => {
              return (
                <article
                  key={id}
                  className="flex flex-col gap-4 rounded-lg border bg-white p-6 shadow-sm"
                >
                  <h2 className="text-xl font-bold text-green-800">{title}</h2>
                  <div>
                    <div
                      className="line-clamp-4"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                    <Link
                      href={`/kezelesek/${url_slug}`}
                      className="text-sm text-blue-500 underline underline-offset-2"
                    >
                      ...részletek
                    </Link>
                  </div>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex
                     items-center gap-2 self-start rounded-lg border border-green-800 bg-green-50 px-4 py-2 font-semibold text-green-800 transition-all hover:bg-green-800 hover:text-white"
                  >
                    <LuCalendarPlus className="text-xl" />
                    <span>Időpontot foglalás</span>
                  </a>
                </article>
              );
            })}
        </div>
      </div>
    </main>
  );
}
