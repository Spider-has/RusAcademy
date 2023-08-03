import { atom, action } from "@reatom/core";
import {fetchGetRequest} from "../fetchRequest/fetchRequest"
import {logInUserUrl, topStudentsUrl, gameCardsListUrl, theoryCardsListUrl} from "../../api/utilities"
import {onConnect} from "@reatom/framework";

export const isLoadingAtom = atom(false, "isLoadingAtom");

type logInUser = {
    name: string,
    surname: string,
    id: string,
    class: number,
    email: string,
    totalScore: number,
    type: "student" | "admin"
    avatar?: string,
}

const initialUserState: logInUser = {
    name: "Артем",
    surname: "Иванов",
    id: "",
    email: "ivanovartem2010@gmail.com",
    class: 5,
    totalScore: 50,
    type: "student",
}

export const logInUserAtom = atom(initialUserState, 'logInUserAtom');

export const getlogInUserInfo = action((ctx) => {
    isLoadingAtom(ctx, true);
    ctx.schedule(async () => {
        const user = await fetchGetRequest(logInUserUrl);
        if (user){
            logInUserAtom(ctx, user);
        }
        isLoadingAtom(ctx, false)
    })
})

onConnect(logInUserAtom, (ctx) => {
    getlogInUserInfo(ctx)
})


type topStudentsListCell = {
    name: string,
    surname: string,
    id: string,
    totalScore: number,
    avatar?: string,
}

type topStudentsList = Array<topStudentsListCell>;

const initialTopStudentsListState: topStudentsList = [
    {
        name: "Артем",
        surname: "Иванов",
        id: "",
        totalScore: 50,
    },
    {
        name: "Артем",
        surname: "Иванов",
        id: "",
        totalScore: 50,
    },
    {
        name: "Артем",
        surname: "Иванов",
        id: "",
        totalScore: 50,
    },
    {
        name: "Артем",
        surname: "Иванов",
        id: "",
        totalScore: 50,
    },
    {
        name: "Артем",
        surname: "Иванов",
        id: "",
        totalScore: 50,
    },
    {
        name: "Артем",
        surname: "Иванов",
        id: "",
        totalScore: 50,
    },
    {
        name: "Артем",
        surname: "Иванов",
        id: "",
        totalScore: 50,
    },
    {
        name: "Артем",
        surname: "Иванов",
        id: "",
        totalScore: 50,
    },
    {
        name: "Артем",
        surname: "Иванов",
        id: "",
        totalScore: 50,
    },
    {
        name: "Артем",
        surname: "Иванов",
        id: "",
        totalScore: 50,
    }
]

export const topStudentsListAtom = atom(initialTopStudentsListState, 'topStudentsListAtom');

export const getTopStudentsList = action((ctx) => {
    isLoadingAtom(ctx, true);
    ctx.schedule(async () => {
        const usersList = await fetchGetRequest(topStudentsUrl);
        usersList ? 
            topStudentsListAtom(ctx, usersList)
        :
            topStudentsListAtom(ctx, [])
        isLoadingAtom(ctx, false)
    })
})

onConnect(topStudentsListAtom, (ctx) => {
    getTopStudentsList(ctx)
})


type gameCard = {
    title: string,
    id: string
}

type gameCardsList = Array<gameCard>

const initialgameCardsListState: gameCardsList = [
    {
        title: "Гласные в корнях с чередованием",
        id: ""
    },
    {
        title: "НЕ с прилагательными и существительными",
        id: ""
    },
    {
        title: "Ё-О после шипящих в корнях, суффиксах и окончаниях",
        id: ""
    }
]

export const gameCardsListAtom = atom(initialgameCardsListState, 'gameCardsListAtom');

export const getGameCardsList = action((ctx) => {
    isLoadingAtom(ctx, true);
    ctx.schedule(async () => {
        const gamesList = await fetchGetRequest(gameCardsListUrl);
        gamesList ? 
            gameCardsListAtom(ctx, gamesList)
        :
            gameCardsListAtom(ctx, [])
        isLoadingAtom(ctx, false)
    })
})
onConnect(gameCardsListAtom, (ctx) => {
    getGameCardsList(ctx)
})


type theoryCard = {
    title: string,
    id: ""
}

type theoryCardsList = Array<theoryCard>

const initialTheoryCardList: theoryCardsList = [
    {
        title: "Гласные в корнях с чередованием",
        id: ""
    },
    {
        title: "Ё-О после шипящих в корнях, суффиксах и окончаниях",
        id: ""
    },
    {
        title: "НЕ с прилагательными и существительными",
        id: ""
    }
]

export const theoryCardsListAtom = atom(initialTheoryCardList, 'theoryCardsListAtom');

export const getTheoryCardsList = action((ctx) => {
    isLoadingAtom(ctx, true);
    ctx.schedule(async () => {
        const cardsList = await fetchGetRequest(theoryCardsListUrl);
        cardsList ? 
            theoryCardsListAtom(ctx, cardsList)
        :
            theoryCardsListAtom(ctx, [])
        isLoadingAtom(ctx, false)
    })
})
onConnect(theoryCardsListAtom, (ctx) => {
    getTheoryCardsList(ctx)
})

export const getAtomData = action((ctx, atomObj, url) => {
    isLoadingAtom(ctx, true);
    ctx.schedule(async () => {
        const dataObj = await fetchGetRequest(url);
        if(dataObj) 
            atomObj(ctx, dataObj)
        else
            atomObj(ctx, undefined);
        console.log(ctx.get(atomObj))
        isLoadingAtom(ctx, false)
    })
})