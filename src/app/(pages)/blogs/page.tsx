import { BlogsPageTemplate } from "@/components/templates/BlogsPageTemplate";
import { MainLayout } from "@/components/templates/MainLayout";

const Blogs: React.FC = () => {
  return (
    <MainLayout>
      <BlogsPageTemplate />
    </MainLayout>
  );
};

export default Blogs;
