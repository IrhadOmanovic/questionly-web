import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const QuestionCard = () => {
  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle>What is the meaning of life?</CardTitle>
        <CardDescription>
          I was wondering liek what is meaning of it all please answer guys
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">BUTTON</CardFooter>
    </Card>
  );
};

export default QuestionCard;
