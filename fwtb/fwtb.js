var storyContent = ﻿{"inkVersion":17,"root":[{"->":"start"},"done",{"start":["^You make your way through the crowded airport and lean to the wall just beside the enterance to the foreign departures terminal, you took out a cigaratte and start to smoke.","\n","^Each puff of smoke bring you memories, memories that you'd rather forget, memories, that you don't want to remember.","\n","^Images flicker of a small town, where once you used to live, being shelled, fire sweeping through the countryside you once played as a child, and of ashes, carpeting the very house, you once lived.","\n","^You shake your head. This was another life, left in a country that once was...","\n","^A voice starts to speak, your beloved looks at your face, \"Are you allright?\"","\n",["ev","str","^Sure.","/str","/ev",{"*":".^.c","flg":20},{"c":["^ \"Sure, I was just waiting for you.\" You smile at her, it makes you feel good to see her. \"So, you and your parents... I heard you were accepted by...\" \"Canada\", she completes the sentence for you.","\n","\n",["ev","str","^That's Great!","/str","/ev",{"*":".^.c","flg":20},{"c":["^ \"That's Great!\", despite the enthusiasm you show from the outside, you can feel an uneasy feeling in your stomach, moreover, she looks sad as well...","\n","\n","^Before you can say anyting else, she says, \"So yeah... I know what you are thinking... You know my parrents, you know how they are a bit... a bit...\"","\n",["ev","str","^Conservative?","/str","/ev",{"*":".^.c","flg":20},{"c":["^ \"Conservative?\"","\n","\n","^\"Yeah\", she looks uneasy, sad, \"They said, they don't want me to talk with you...\" \"Oh...\" You take another puff from the cigaratte, trying to hide your broken heart, you don't want her to be sadder than this...","\n","^But you just can't hide some feelings, can you?","\n","^A tear goes down your cheek, you studder, \"I... love you.\" She looks at your eyes, with tears in her eyes, \"I love you too, but... I am so sorry, I am so, so, sorry.\" She wipes her tears, \"Anyway, I just want to, remember some moments... for a last time.\"","\n",["ev","str","^Sure","/str","/ev",{"*":".^.c","flg":20},{"c":["^ \"Sure.\" You wipe your tears and somehow muster a smile, \"How much time do we have?\" \"I kind ran away from the terminal so, not much.\" she says, with a smile \"But there is so much to remember... so much.\" tears form again","\n","\n",{"->":"remember"},{"#f":7}]}],{"#f":7}]}],{"#f":7}]}],{"#f":7}]}],{"#f":3}],"remember":[["ev",{"VAR?":"AVAILABLE_KNOTS_JULIAN"},1,"-","/ev",{"temp=":"AVAILABLE_KNOTS_JULIAN","re":true},["G>","ev",{"VAR?":"AVAILABLE_KNOTS_JULIAN"},0,"==","/ev",[{"->":".^.b","c":true},{"b":[{"->":"remember_jules"},{"->":".^.^.^.7"},null]}],"nop","G<",null],"\n",["G>",["ev","visit",2,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^You look at her, there is so much you want to remind her, but first...",{"->":".^.^.23"},null],"s1":["pop","^Wind is cold, not like it was used to be in the old country, this reminds you of...",{"->":".^.^.23"},null],"s2":["pop","^ You studder, not much time is left, perhaps one more precious memory such as...",{"->":".^.^.23"},null],"#f":5}],"G<",null],"\n",["ev","str","^The Town","/str","/ev",{"*":".^.c","flg":20},{"c":["\n","\n","^\"Do you remember, how it was in the town, we chouldn't meet much but when we could, it was really fun...\", she smiles, \"Yeah, it really was. I remember of the lake that was just near it, when we used to go there and just lay down, watching the clouds, before it all came down crashing... I love you so much.\" We hug, trying to forget, trying to feel better.","\n",{"->":".^.^.^.g-0"},{"#f":7}]}],["ev","str","^Day at the praire","/str","/ev",{"*":".^.c","flg":20},{"c":["\n","\n","^\"Remember that time when we ditched the school to go to that praire that was thirty minutes away, and we were so tired we just collapsed to the ground\" She smiles, \"I remember you couldn't sing even if you tried.\" I fake a shock, \"What? I was a superstar that day.\" We laugh, holding onto the tears that fall to the ground...","\n",{"->":".^.^.^.g-0"},{"#f":7}]}],["ev","str","^the Forrest","/str","/ev",{"*":".^.c","flg":20},{"c":["\n","\n","^\"Do you remember about that time when we went to the forest nearby, leaves were so lush green and that day you confessed me...\" \"My love...\" she completed the sentence and laughed, \"Yeah.\" I blinked a few times...","\n",{"->":".^.^.^.g-0"},{"#f":7}]}],["ev","str","^the School","/str","/ev",{"*":".^.c","flg":20},{"c":["\n","\n","^\"I remember the school.\" She laughs, \"Is that what you choose to remember? Out of everything you can remember?\"","\n",["ev","str","^You were there too","/str","/ev",{"*":".^.c","flg":20},{"c":["^ \"In my defence, you were there too, I wouldn't want to forget it...\" She blushes, \"Well, if you say so.\"","\n","\n",{"->":"remember.0.g-0"},{"#f":7}]}],["ev","str","^What would you prefer me to remember?","/str","/ev",{"*":".^.c","flg":20},{"c":["^ \"What else should I remember?\" You say, \"That time in the cinema, where we hugged and just watched that movie...\" \"Frozen?\" \"Yeah...\" You smile, \"I can remember that...\"","\n","\n",{"->":"remember.0.g-0"},{"#f":7}]}],{"#f":7}]}],["ev","str","^Day of the escape","/str","/ev",{"*":".^.c","flg":20},{"c":["\n","\n","^\"Do you remember the day of the escape?\" She gulps, \"Yeah I do, but you were with me that day, without you I wouldn't...\" she closes her eyes \"And without you I wouldn't either.\" I say, images flicker.","\n",{"->":".^.^.^.g-0"},{"#f":7}]}],["ev","str","^My brother","/str","/ev",{"*":".^.c","flg":20},{"c":["\n","\n","^\"Do you remember how my brother helped us meet in secret?\" \"Oh yeah, I do, I will miss him too... I wish, you know...\" \"Me too.\" You say, you shed yet more tears.","\n",{"->":".^.^.^.g-0"},{"#f":7}]}],["ev","str","^Your sister","/str","/ev",{"*":".^.c","flg":20},{"c":["\n","\n","^\"I remember your sister hiding the fact you were out that night,\" \"It was nice to walk in the beach, without worrying about anything...\" You smile, \"Yeah it was.\"","\n",{"->":".^.^.^.g-0"},{"#f":7}]}],["ev","str","^the Dance","/str","/ev",{"*":".^.c","flg":20},{"c":["\n","\n","^\"Do you remember... the dance, the graduation...\" \"We never could though...\" \"Yeah...\"","\n",["ev","str","^Take her hand","/str","/ev",{"*":".^.c","flg":20},{"c":["^ You extend your hand, \"Would you dance with me today?\" She takes it without hesitation, and you try to remember a few moves you learned in the course.","\n","\n",{"->":"remember.0.g-0"},{"#f":7}]}],{"#f":7}]}],{"g-0":[{"->":"remember_jules"},{"#f":7}]}],{"#f":3}],"remember_jules":["^She speaks, ",["G>",["ev","visit",3,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"nop",{"s0":["pop","^\"I remember the time when we ditched the classes to chill out at the canteen\", a smile forms in her face, \"I remember it so well...\" ",{"->":".^.^.29"},null],"s1":["pop","^ \"I remember you used to play guitar for me, well, at least you tried to learn, didn't you\"",{"->":".^.^.29"},null],"s2":["pop","^ \"I love you...\" ",{"->":".^.^.29"},null],"s3":["pop","^ ",{"->":"love_you_too"},{"->":".^.^.29"},null],"#f":5}],"G<",null],"\n",{"->":".^"},{"#f":3}],"love_you_too":["^\"I love you too\" you smile, looking at her, you lean and so does she, your meet halfway and kiss, it is not a long kiss, nor is it short, but inbetween tears and sadness, it is a kiss nonetheless. You just wish it wasn't the last kiss you would have with her... You just wish it so hard.","\n","^\"I have to go...\" she says, tears everywhere, a last farewell, you kiss her again, trying to postpone the last kiss... but eventually, she has to leave.","\n","^She waves for one last time, and finally yells to you, \"I love you Julian.\"","\n","^As she gets further and further away, and as she dissapears behind the terminal you whisper, \"I love you Charlotte, I love you...\"","\n","^It has been nearly six months since you left Germany, now wartorn and destroyed, there is no way back now, there isn't even a Germany now.","\n","^As you smoke, you can't help but remember of an old book you once saw, in a counter at Frankfurt: \"Das ist bei uns nicht möglich.\" by Sinclair Lewis","\n","^You laugh as you throw your ciggaratte to the ground and crush it, you speak to yourself, \"It can definetally happen here, it can happen everywhere...\"","\n","end",{"#f":3}],"global decl":["ev",4,{"VAR=":"AVAILABLE_KNOTS_JULIAN"},4,{"VAR=":"AVAILABLE_KNOTS_RAY"},"/ev","end",null],"#f":3}],"listDefs":{}};