import QuestionCard from '@/components/custom/questionCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import SearchWithDropdown from '@/components/custom/search/searchWithDropdown';
import { useRippleEffect } from '@/lib/hooks/useRippleEffect';

const ModifiedH2 = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const divRef = React.useRef<React.ElementRef<any>>(null);

  useRippleEffect(divRef as any);

  return (
    <div
      ref={divRef as any}
      className={cn('relative overflow-hidden rounded-full w-full bg-card', className)}
    >
      <h2 {...props} className={cn('cursor-pointer relative rounded-full p-2 h-max')} />
    </div>
  );
};

const LandingPage = () => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<string>('hot-q');
  return (
    <section className="flex m-4 items-center justify-center">
      <div className="2xl:w-3/5 xl:w-9/12 md:w-full my-8 mx-4 flex flex-col items-center">
        <h1 className="text-2xl font-semibold text-center mb-8">
          Join the Conversation at Questionly
        </h1>
        <SearchWithDropdown />
        <Carousel className="w-full max-w-56 sm:hidden h-[5.125rem]">
          <CarouselContent className="text-center">
            <CarouselItem className="flex items-center justify-center py-2">
              <ModifiedH2
                className={cn({
                  'bg-background text-background-foreground border border-primary shadow-md':
                    tab === 'hot-q',
                })}
                onClick={() => setTab('hot-q')}
              >
                Hot Questions
              </ModifiedH2>
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center py-2">
              <ModifiedH2
                className={cn({
                  'bg-background text-background-foreground border border-primary shadow-md':
                    tab === 'latest-q',
                })}
                onClick={() => setTab('latest-q')}
              >
                Latest Questions
              </ModifiedH2>
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center py-2">
              <ModifiedH2
                className={cn({
                  'bg-background text-background-foreground border border-primary shadow-md':
                    tab === 'top-u',
                })}
                onClick={() => setTab('top-u')}
              >
                Top Commenters and Reactors
              </ModifiedH2>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Tabs defaultValue="hot-q" value={tab} onValueChange={setTab}>
          <TabsList className="mb-2 sm:flex hidden">
            <TabsTrigger value="hot-q">
              <h2>Hot Questions</h2>
            </TabsTrigger>
            <TabsTrigger value="latest-q">
              <h2>Latest Questions</h2>
            </TabsTrigger>
            <TabsTrigger value="top-u">
              <h2>Top Commenters and Reactors</h2>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="hot-q" className="gap-4 flex flex-col data-[state=inactive]:hidden">
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
          </TabsContent>
          <TabsContent
            value="latest-q"
            className="gap-4 flex flex-col data-[state=inactive]:hidden"
          >
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
          </TabsContent>
          <TabsContent value="top-u" className="gap-4 flex flex-col data-[state=inactive]:hidden">
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default LandingPage;
