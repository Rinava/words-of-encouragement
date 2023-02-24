
export async function GET(request: Request) {
  const card = await getCards(request.params.id) 
  return new Response(JSON.stringify(card))
}

const getCards = async (id: string) => {
    const cards = await prisma.card.findMany({
        where: {
            id: id
        }
        })
    return cards
}

    