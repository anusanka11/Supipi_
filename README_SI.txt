SUPIPI DAHAMYA - BIRTHDAY SURPRISE WEBSITE
==========================================

මෙය HTML + CSS + JavaScript භාවිතයෙන් සකස් කළ responsive birthday website එකකි.
Phone, tablet සහ desktop screen වලට ගැළපෙන ලෙස සකස් කර ඇත.

1. WEBSITE එක OPEN කරන විදිහ
----------------------------
- ZIP file එක Extract කරන්න.
- Supipi_Birthday_Surprise folder එක ඇතුළේ ඇති index.html file එක double-click කරන්න.
- මුලින් lock screen එක පෙන්වයි. “Unlock your surprise” button එක click කළාම birthday page එක විවෘත වේ.
- Unlock කරන අවස්ථාවේ birthday melody එක play වීමට උත්සාහ කරයි.
- Browser එක audio එක auto-play කිරීමට ඉඩ නොදුන්නොත් ඉහළ ඇති “Play music” button එක click කරන්න.

2. NAME / WISH / PHOTO / AUDIO වෙනස් කරන ආකාරය
----------------------------------------------
resources/content.js file එක Notepad හෝ VS Code එකකින් open කරන්න.
එහි ඇති values වෙනස් කර Save කරන්න.

- personName: සම්පූර්ණ නම
- firstName: Wish එකේ භාවිතා කරන නම
- birthdayDate: YYYY-MM-DD format එකෙන් උපන් දිනය
- heroMessage: ආරම්භයේ පෙන්වන කෙටි message එක
- mainWish සහ mainMessage: ප්‍රධාන birthday wish එක
- surpriseTitle සහ surpriseMessage: Surprise button එක click කළාම පෙන්වන wish එක
- heroImage: ප්‍රධාන photo එකේ path එක
- surpriseImage: Surprise section එකේ photo එකේ path එක
- audioFile: play වන audio file එකේ path එක
- gallery: gallery photos සහ ඒවාට යටින් පෙන්වන captions

3. ඔයාගේ PHOTOS දාන විදිහ
-------------------------
- ඔයාගේ photos resources/images/ folder එකට copy කරන්න.
- උදාහරණයක් ලෙස supipi-01.jpg, supipi-02.jpg වගේ නම් දෙන්න.
- resources/content.js file එකේ image path එක ඒ නමට වෙනස් කරන්න.
  උදා: heroImage: "resources/images/supipi-01.jpg"
- Gallery එකේ හැම photo එකක්ම gallery list එක ඇතුළේ වෙන වෙනම update කරන්න.
- JPG, PNG සහ WebP images භාවිතා කළ හැකියි.

4. AUDIO SONG එක වෙනස් කරන විදිහ
--------------------------------
- ඔයා කැමති MP3 හෝ WAV audio file එක resources/audio/ folder එකට copy කරන්න.
- resources/content.js හි audioFile path එක අලුත් file name එකට වෙනස් කරන්න.
  උදා: audioFile: "resources/audio/my-birthday-song.mp3"
- මේ website එකේ default එකට Happy Birthday melody එකේ instrumental WAV file එකක් දමා ඇත.
- Audio file එක විශාල නම් website එක load වීමට ටිකක් කල් යා හැකියි.

5. WISH IMAGE එක වෙනස් කරන විදිහ
--------------------------------
resources/content.js හි surpriseImage path එක වෙනස් කරන්න. Surprise button එක click කළාම ඒ image එක සහ surpriseMessage එක පෙන්වයි.

6. ONLINE දාන විදිහ
------------------
මෙය static website එකක්. Hosting service එකකට upload කරන විට index.html, styles.css, script.js සහ resources folder එකම upload කරන්න. Folder structure එක වෙනස් නොකරන්න.

IMPORTANT
---------
- මෙහි JavaScript භාවිතා කර ඇත (Java නොවේ). Website එකට backend/server එකක් අවශ්‍ය නැහැ.
- Audio auto-play කිරීම browser settings අනුව සීමා විය හැකියි. ඒ නිසා music button එකත් දමා ඇත.
- Photos/audio වෙනස් කරන විට resources/content.js හි path එකත් update කරන්න.
