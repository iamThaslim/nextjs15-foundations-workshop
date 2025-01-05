export async function generateStaticParams() {
    // const data = await fetch('https://.../some-data-api').then((res) => res.json())
    // rework data to return an array of objects with an id property
  
    return [
      {
        id: "1234",
      },
      {
        id: "5678",
      },
    ];
  }

export default async function Page({
    params,
    searchParams,
  }: {
    params: Promise<{ [key: string]: string | string[] | undefined}>;
  }) {
    const searchParams = await props.searchParams;
    const { name, surname } = searchParams;
    const params = await props.params;
    const { id } = params;
  
    return (
      <div>
        <div className="p-4 bg-gray-800">My dynamic parameter: {id}</div>
      </div>
    );
  }
  