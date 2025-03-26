
const jobdesc = ["Provided efficient and effective technical support via phone, email, and chat for Quickbase users",
"Resolved customer inquiries and issues related to the Quickbase platform, ensuring high levels of customer satisfaction.",
"Documented and tracked customer interactions, problems, and resolutions in the support system.",
"Collaborated with cross functional teams to handle escalated and complex issues.",
"Educated customers on product features, functionality, and best practices to enhance their user experience.",
"Kept up-to-date with product updates, new features, and industry trends."];


export default function currentjob() {
    return (
    <div className="preview-card h-auto overflow-auto bg-slate-600 text-white">
        <h1 className="text-2xl font-bold">Quickbase Tier 1 Technical Support Representative</h1> <br/>
            <ul className="text-left space-y-4">
            {jobdesc.map((action,idx) => 
            <li key={idx} className=" pl-4">{action}</li>
            )}
            </ul>
            </div>
  )
}



