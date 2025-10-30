import BlogCard from "@/components/blog/blog-card"

export default function Blog() {
	return (
		<main className="flex flex-col items-center px-4">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 mb-28" style={{ minHeight: "calc(65vh)" }}>
				<BlogCard 
					title="Building a SOC Stack with Docker" 
					description="Learn how to deploy a scalable SOC environment using Wazuh, TheHive, and Docker Swarm."
					imageUrl="https://logos-world.net/wp-content/uploads/2021/02/Docker-Symbol.png"
					link="/blog/123124123123"
				/>
				<BlogCard 
					title="Building a SOC Stack with Docker" 
					description="Learn how to deploy a scalable SOC environment using Wazuh, TheHive, and Docker Swarm."
					imageUrl="https://logos-world.net/wp-content/uploads/2021/02/Docker-Symbol.png"
					link="/blog/123124123123"
				/>
			</div>
		</main>
	);
}
