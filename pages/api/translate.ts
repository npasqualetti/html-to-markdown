import { TranslateBody } from '@/types/types';
import { TranslateStream } from '@/utils';

export const config = {
  runtime: 'edge',
};

const handler = async (req: Request): Promise<Response> => {
  try {
    const { inputCode } =
      (await req.json()) as TranslateBody;
    const stream = await TranslateStream(
      inputCode,
    );
    return new Response(stream);
  } catch (error) {
    return new Response('Error', { status: 500 });
  }
};

export default handler;
