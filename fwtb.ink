VAR AVAILABLE_KNOTS_JULIAN = 4
VAR AVAILABLE_KNOTS_RAY = 4


-> start

=== start ===
 You make your way through the crowded airport and lean to the wall just beside the entrance to the foreign departures terminal, you took out a cigarette and start to smoke.
 
 Each puff of smoke bring you memories, memories that you'd rather forget, memories, that you don't want to remember.
 
 Images flicker of a small town, where once you used to live, being shelled, fire sweeping through the countryside you once played as a child, and of ashes, carpeting the very house, you once lived.
 
 You shake your head. This was another life, left in a country that once was...
 
 A voice starts to speak, your beloved looks at your face, "Are you alright?"
 
 * [Sure.] "Sure, I was just waiting for you." You smile at her, it makes you feel good to see her. "So, you and your parents... I heard you were accepted by..." "Canada", she completes the sentence for you.
    ** [That's Great!] "That's Great!", despite the enthusiasm you show from the outside, you can feel an uneasy feeling in your stomach, moreover, she looks sad as well...
    Before you can say anything else, she says, "So yeah... I know what you are thinking... You know my parents, you know how they are a bit... a bit..."
        *** [Conservative?] "Conservative?"
        "Yeah", she looks uneasy, sad, "They said, they don't want me to talk with you..." "Oh..." You take another puff from the cigarette, trying to hide your broken heart, you don't want her to be sadder than this...
        
        But you just can't hide some feelings, can you?
        
        A tear goes down your cheek, you shutter, "I... love you." She looks at your eyes, with tears in her eyes, "I love you too, but... I am so sorry, I am so, so, sorry." She wipes her tears, "Anyway, I just want to, remember some moments... for a last time."
        **** [Sure] "Sure." You wipe your tears and somehow muster a smile, "How much time do we have?" "I kind ran away from the terminal so, not much." she says, with a smile "But there is so much to remember... so much." tears form again
        -> remember
    
=== remember ===
~ AVAILABLE_KNOTS_JULIAN = AVAILABLE_KNOTS_JULIAN - 1
{AVAILABLE_KNOTS_JULIAN == 0: -> remember_jules}
{You look at her, there is so much you want to remind her, but first...|Wind is cold, not like it was used to be in the old country, this reminds you of...| You pause, not much time is left, perhaps one more precious memory such as...}
* [The Town]
    "Do you remember, how it was in the town, we couldn't meet much but when we could, it was really fun...", she smiles, "Yeah, it really was. I remember of the lake that was just near it, when we used to go there and just lay down, watching the clouds, before it all came down crashing... I love you so much." We hug, trying to forget, trying to feel better.
* [Day at the praire]
    "Remember that time when we ditched the school to go to that prairie that was thirty minutes away, and we were so tired we just collapsed to the ground" She smiles, "I remember you couldn't sing even if you tried." I fake a shock, "What? I was a superstar that day." We laugh, holding onto the tears that fall to the ground...
* [the Forrest]
    "Do you remember about that time when we went to the forest nearby, leaves were so lush green and that day you confessed me..." "My love..." she completed the sentence and laughed, "Yeah." I blinked a few times...
* [the School]
    "I remember the school." She laughs, "Is that what you choose to remember? Out of everything you can remember?"
    ** [You were there too] "In my defence, you were there too, I wouldn't want to forget it..." She blushes, "Well, if you say so."
    ** [What would you prefer me to remember?] "What else should I remember?" You say, "That time in the cinema, where we hugged and just watched that movie..." "Frozen?" "Yeah..." You smile, "I can remember that..." 
* [Day of the escape]
    "Do you remember the day of the escape?" She gulps, "Yeah I do, but you were with me that day, without you I wouldn't..." she closes her eyes "And without you, I wouldn't either." I say, images flicker.
* [My brother]
    "Do you remember how my brother helped us meet in secret?" "Oh yeah, I do, I will miss him too. I wish... you know..." "Me too." You say, you shed yet more tears.
* [Your sister]
    "I remember your sister hiding the fact you were out that night," "It was nice to walk in the beach, without worrying about anything..." You smile, "Yeah it was."
* [the Dance]
    "Do you remember... the dance, the graduation..." "We never could though..." "Yeah..."
    ** [Take her hand] You extend your hand, "Would you dance with me today?" She takes it without hesitation, and you try to remember a few moves you learned in the course.
- -> remember_jules
=== remember_jules ===
She speaks, {"I remember the time when we ditched the classes to chill out at the canteen", a smile forms in her face, "I remember it so well..." | "I remember you used to play the guitar for me, well, at least you tried to learn, didn't you"| "I love you..." | -> love_you_too}
->remember_jules

=== love_you_too ===

"I love you too" you smile, looking at her, you lean and so does she, your meet halfway and kiss, it is not a long kiss, nor is it short, but in between tears and sadness, it is a kiss nonetheless. You just wish it wasn't the last kiss you would have with her... You just wish it so hard.

"I have to go..." she says, tears everywhere, a last farewell, you kiss her again, trying to postpone the last kiss... but eventually, she has to leave.

She waves for one last time, and finally yells to you, "I love you, Julian."

As she gets further and further away, and as she disappears behind the terminal you whisper, "I love you Charlotte, I love you..."

It has been nearly six months since you left Germany, now wartorn and destroyed, there is no way back now, there isn't even a Germany now.

As you smoke, you can't help but remember of an old book you once saw, in a counter at Frankfurt: "Das ist bei uns nicht möglich." by Sinclair Lewis

You laugh as you throw your cigarette to the ground and crush it, you speak to yourself, "It did happen here, it can happen everywhere..."

-> END
