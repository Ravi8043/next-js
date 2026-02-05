interface BlogIdProps {
    params: Promise<{
      blogId: string;
    }>;
}
  

export default async function page({params} : BlogIdProps){
    const {blogId} = await params;
    return(
        <div>
            <h1 className="text-2xl">this is blog {blogId}</h1>
        </div>
    )
}