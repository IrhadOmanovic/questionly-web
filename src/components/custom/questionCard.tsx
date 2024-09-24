import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  TiMessage,
  TiArrowUpOutline,
  TiArrowDownOutline,
  TiArrowUpThick,
  TiArrowDownThick,
} from 'react-icons/ti';

const QuestionCard = () => {
  return (
    <article>
      <Card className="border-none">
        <CardHeader>
          <CardTitle>What is the meaning of life?</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            I was wondering liek what is meaning of it all please answer guys I was wondering liek
            what is meaning of it all please answer guys I was wondering liek what is meaning of it
            all please answer guys I was wondering liek what is meaning of it all please answer guys
            I was wondering liek what is meaning of it all please answer guys I was wondering liek
            what is meaning of it all please answer guys I was wondering liek what is meaning of it
            all please answer guys I was wondering liek what is meaning of it all please answer guys
          </CardDescription>
        </CardContent>
        <CardFooter className="gap-2 font-medium">
          {/* TODO: bg accent if dislike bg-primary if like (arrows filled and white) */}
          <div className="flex items-center rounded-full bg-background shadow-sm text-background-foreground gap-1">
            <div className="p-1 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors transition-300 rounded-full">
              <TiArrowUpOutline size={'24'} />
            </div>
            <span className="text-xs">45</span>
            <div className="p-1 cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors transition-300 rounded-full">
              <TiArrowDownOutline size={'24'} />
            </div>
          </div>
          <div className="cursor-pointer flex items-center rounded-full bg-background justify-center gap-1 shadow-sm py-1 px-2">
            <TiMessage className="" size={'24'} />
            <span className="text-xs">Comment</span>
          </div>
        </CardFooter>
      </Card>
    </article>
  );
};

export default QuestionCard;
