import QuestionCard from '@/components/custom/questionCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LandingPage = () => {
  return (
    <section className="flex m-4 items-center justify-center">
      <div className="2xl:w-3/5 xl:w-9/12 md:w-full my-8 mx-4">
        <Tabs defaultValue="hot-q">
          <TabsList>
            <TabsTrigger value="hot-q">Hot Questions</TabsTrigger>
            <TabsTrigger value="latest-q">Latest Questions</TabsTrigger>
            <TabsTrigger value="top-u">Top Commenters and Reactors</TabsTrigger>
          </TabsList>
          <TabsContent value="hot-q">
            <QuestionCard />
          </TabsContent>
          <TabsContent value="latest-q">Change your password here.</TabsContent>
          <TabsContent value="top-u">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default LandingPage;
