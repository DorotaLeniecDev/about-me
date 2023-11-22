import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Ecommerce Admin Panel"
        description="CMS for managing multiple stores / vendors. Create stores, manage categories, products, sizes, colors, generate API routes in one admin panel."
        link="https://e-commerce-admin-4vw73nzme-dorotaleniecdev.vercel.app/"
        img={{
          src: "/assets/images/ecommerce.png",
          alt: "Project Web Design",
        }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>NextJS</Tags>
            <Tags color={ColorTags.INDIGO}>Prisma</Tags>
            <Tags color={ColorTags.GREEN}>Tailwind.css</Tags>
            <Tags color={ColorTags.YELLOW}>TypeScript</Tags>
          </>
        }
      />

      <Project
        name="Ecommerce Platform"
        description="Store page intgrated with Ecommerce Admin Panel."
        link="https://e-commerce-admin-4vw73nzme-dorotaleniecdev.vercel.app/"
        img={{
          src: "/assets/images/ecommerce-platform.png",
          alt: "Project Web Design",
        }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>NextJS</Tags>
            <Tags color={ColorTags.GREEN}>Tailwind.css</Tags>
            <Tags color={ColorTags.YELLOW}>TypeScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };