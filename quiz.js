const quizData = [
  {
    "question": "Procesor Intel 4004 powstał w roku**",
    "answers": {
      "a": "1965",
      "b": "1972",
      "c": "1978",
      "d": "1981",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "e",
    "explanation": "Procesor Intel 4004 został wypuszczony na rynek w 1971 roku [2]."
  },
  {
    "question": "Ile rejestrów posiadał procesor 4004**",
    "answers": {
      "a": "4 rejestry 4 bitowe",
      "b": "8 rejestrów 4 bitowych",
      "c": "4 rejestry 8 bitowe",
      "d": "16 rejestrów 4 bitowych",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "d",
    "explanation": "Intel 4004 posiadał 16 4-bitowych rejestrów [3]. Opcja \"d\" została dodana, aby odzwierciedlić faktyczną liczbę rejestrów, ponieważ żadna z pierwotnie podanych opcji (a, b,\nc) nie była poprawna."
  },
  {
    "question": "Procesory Intel 8080 mogły adresować pamięć o rozmiarze**",
    "answers": {
      "a": "4 KiB",
      "b": "14 KiB",
      "c": "1 MiB",
      "d": "16 MiB",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "e",
    "explanation": "Procesory Intel 8080 mogły adresować maksymalnie do 64 KiB pamięci [3]."
  },
  {
    "question": "Intel 8080 był pierwotnie opracowany do**",
    "answers": {
      "a": "kalkulatora",
      "b": "terminala komputerowego",
      "c": "samolotu F14",
      "d": "sterowania 4-stopniowym ramieniem",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "e",
    "explanation": "Intel 8080 został zaprojektowany z myślą o ogólnym przeznaczeniu [3]. Chociaż Intel 4004 był pierwotnie przeznaczony do kalkulatorów [4], dla procesora 8080 nie podano konkretnego pierwotnego przeznaczenia spośród opcji."
  },
  {
    "question": "Głównym konstruktorem procesora 8086 był**",
    "answers": {
      "a": "Steve Baimer",
      "b": "Steve Jobs",
      "c": "Steven Morse",
      "d": "Bill Gates",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "c",
    "explanation": "Gdyby szefostwo Intela chciało, by architektura ta przetrwała wiele generacji i przerodziła się w dzisiejsze procesory, to nigdy nie zleciliby tego zadania jednej osobie\" [5]."
  },
  {
    "question": "Komputer IBM 5150 posiadał procesor Intel**",
    "answers": {
      "a": "8080",
      "b": "8086",
      "c": "8088",
      "d": "80186",
      "e": "żaden z powyższych"
    },
    "correctAnswer": "c",
    "explanation": "Komputer IBM 5150 posiadał procesor Intel 8088, pomimo że na rynku był dostępny mocniejszy procesor 8086 [5]."
  },
  {
    "question": "Który z procesorów jako pierwszy mógł współpracować z koprocesorem**",
    "answers": {
      "a": "8088",
      "b": "80286",
      "c": "80386",
      "d": "80486DX",
      "e": "Pentium Pro"
    },
    "correctAnswer": "a",
    "explanation": "Pierwszym procesorem, który mógł współpracować z koprocesorem (model 8087), był 8088 [6]."
  },
  {
    "question": "Ile instrukcji może przechowywać kolejka instrukcji procesora 8088**",
    "answers": {
      "a": "2",
      "b": "4",
      "c": "6",
      "d": "8",
      "e": "16"
    },
    "correctAnswer": "b",
    "explanation": "Procesor Intel 8088 posiadał kolejkę instrukcji 4-elementową, w przeciwieństwie do swojego poprzednika 8086, który posiadał 6-elementową [7]."
  },
  {
    "question": "W którym procesorze Intel po raz pierwszy zastosował tryb chroniony**",
    "answers": {
      "a": "8086",
      "b": "80286",
      "c": "80386",
      "d": "Pentium Pro",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "b",
    "explanation": "Tryb chroniony został wprowadzony w 1982 roku do procesora 80286. Tryb ten umożliwiał adresowanie pamięci powyżej 1 MB oraz wprowadzał sprzętową ochronę pamięci, stronicowanie i wywłaszczanie procesów [7, 8]."
  },
  {
    "question": "Procesory Intel 80286 mogły zaadresować pamięć o rozmiarze**",
    "answers": {
      "a": "4 KiB",
      "b": "16 KiB",
      "c": "1 MiB",
      "d": "16 MiB",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "d",
    "explanation": "Procesor Intel 80286 wprowadził tryb chroniony, w którym mógł zaadresować do 16 MiB pamięci. W trybie rzeczywistym mógł adresować tylko 1 MiB [8]."
  },
  {
    "question": "W procesorze i486SX Intel po raz pierwszy wprowadził**",
    "answers": {
      "a": "rejestry 32-bitowe",
      "b": "pięciostopniowy potok instrukcji",
      "c": "koprocesor matematyczny",
      "d": "brak poprawnej odpowiedzi",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "e",
    "explanation": "Rejestry 32-bitowe zostały wprowadzone w i386, natomiast koprocesor matematyczny i pięciostopniowy potok instrukcji zostały wprowadzone w i486DX, a nie w i486SX [9, 10]. Dlatego żadna z podanych opcji nie jest poprawna dla i486SX."
  },
  {
    "question": "Dwa rdzenie po raz pierwszy pojawiły się w procesorze**",
    "answers": {
      "a": "Pentium",
      "b": "Pentium II",
      "c": "Pentium III",
      "d": "Pentium IV",
      "e": "Core 2 Duo"
    },
    "correctAnswer": "d",
    "explanation": "Dwa rdzenie po raz pierwszy pojawiły się w wersjach Smithfield i Presler, wydanych w 2005 roku, pod koniec produkcji procesorów Pentium IV, na rok przed wypuszczeniem Core 2 Duo [10]."
  },
  {
    "question": "Superskalarność to właściwość procesora polegająca na**",
    "answers": {
      "a": "wykonywaniu instrukcji w potoku",
      "b": "wykonywaniu kilku instrukcji jednocześnie",
      "c": "przewidywaniu, który rozkaz będzie wykonywany po skoku warunkowym",
      "d": "redukcji liczby rozkazów",
      "e": "żadna z powyższych"
    },
    "correctAnswer": "b",
    "explanation": "Superskalarność to cecha procesorów oznaczająca możliwość wykonywania kilku instrukcji (rozkazów maszynowych) jednocześnie, uzyskiwana poprzez zwielokrotnienie jednostek wykonawczych [10]."
  },
  {
    "question": "W procesorze Sandy Bridge pojawiły się instrukcje**",
    "answers": {
      "a": "MMX",
      "b": "SSE",
      "c": "AVX",
      "d": "FMA3",
      "e": "brak poprawnej odpowiedzi"
    },
    "correctAnswer": "c",
    "explanation": "Druga generacja procesorów Intel (Sandy Bridge) wprowadziła instrukcje AVX [11]."
  },
  {
    "question": "Instrukcje FMA3 po raz pierwszy zostały wbudowane do procesora**",
    "answers": {
      "a": "Sandy Bridge",
      "b": "Ivy Bridge",
      "c": "Hashwell",
      "d": "Sky Lake",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "c",
    "explanation": "Czwarta generacja procesorów Intel (Hashwell) wprowadziła instrukcje FMA3 oraz AVX2 [11]."
  },
  {
    "question": "Procesory Core 2 Duo posiadają współczynnik IPC (Instruction Per Cycle)**",
    "answers": {
      "a": "4",
      "b": "3,5",
      "c": "2,5",
      "d": "2",
      "e": "3"
    },
    "correctAnswer": "e",
    "explanation": "Wartość IPC w procesorach z ostatnich 30 lat waha się ogólnie od 3 do 4 [12]. Opcja \"3\" jest wartością w tym zakresie."
  },
  {
    "question": "Instrukcje SSE Intel wprowadził po raz pierwszy w procesorze**",
    "answers": {
      "a": "Ivy Bridge",
      "b": "Sandy Bridge",
      "c": "Core 2 Duo",
      "d": "Pentium III",
      "e": "Pentium MMX"
    },
    "correctAnswer": "b",
    "explanation": "Źródła nie zawierają bezpośredniej informacji o tym, który procesor jako pierwszy wprowadził instrukcje SSE. Wskazano jedynie, że \"Pentium MMX (...) wprowadził instrukcje\" [12], ale zdanie to jest niekompletne."
  },
  {
    "question": "Instrukcje AVX Intel wprowadził po raz pierwszy w procesorze**",
    "answers": {
      "a": "Pentium II",
      "b": "Pentium 4",
      "c": "Pentium D",
      "d": "Sandy Bridge",
      "e": "Ivy Bridge"
    },
    "correctAnswer": "d",
    "explanation": "Instrukcje AVX wprowadzono w drugiej generacji procesorów Intel (Sandy Bridge) [11, 13]."
  },
  {
    "question": "W procesorze Ivy Bridge Intel po raz pierwszy wprowadził**",
    "answers": {
      "a": "rejestry 64-bitowe",
      "b": "pięciostopniowy potok instrukcji",
      "c": "koprocesor matematyczny",
      "d": "generator liczb losowych",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "d",
    "explanation": "W trzeciej generacji procesorów Intel (Ivy Bridge) wprowadzono generator liczb losowych na bazie szumów termicznych procesora [13]."
  },
  {
    "question": "W procesorze Alder Lake Intel po raz pierwszy wprowadził**",
    "answers": {
      "a": "rejestry 64-bitowe",
      "b": "pięciostopniowy potok instrukcji",
      "c": "koprocesor matematyczny",
      "d": "dwa rodzaje rdzeni",
      "e": "generator liczb losowych"
    },
    "correctAnswer": "d",
    "explanation": "W 12. generacji procesorów Intel (Alder Lake) po raz pierwszy wprowadzono hybrydową architekturę z podziałem na wydajne rdzenie P i energooszczędne rdzenie E [14-16]."
  },
  {
    "question": "Współczesne procesory Intel i3 zbudowane są z około**",
    "answers": {
      "a": "kilku milionów tranzystorów",
      "b": "kilkudziesięciu milionów tranzystorów",
      "c": "kilkuset milionów tranzystorów",
      "d": "kilku miliardów tranzystorów",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "d",
    "explanation": "Współczesne procesory mają liczbę tranzystorów idącą w miliardy / dziesiątki miliardów. Przykładem jest i7 10. generacji, który posiadał 7,4 mld tranzystorów [17-19]."
  },
  {
    "question": "Współczesne procesory Intel i7 zbudowane są z około**",
    "answers": {
      "a": "100 tys. tranzystorów",
      "b": "1 mln tranzystorów",
      "c": "10 mln tranzystorów",
      "d": "100 mln tranzystorów",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "e",
    "explanation": "Współczesne procesory mają liczbę tranzystorów idącą w miliardy / dziesiątki miliardów. Ostatni wspomniany w wykładzie i7 10. generacji posiadał 7,4 mld tranzystorów, co znacznie przewyższa podane opcje [17, 18]."
  },
  {
    "question": "Liczba tranzystorów we współczesnych procesorach Intela jest rzędu**",
    "answers": {
      "a": "10^5",
      "b": "10^7",
      "c": "10^9",
      "d": "10^11",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "c",
    "explanation": "Współczesne procesory mają liczbę tranzystorów idącą w miliardy / dziesiątki miliardów [17-19]. Rząd wielkości 10^9 odpowiada miliardom."
  },
  {
    "question": "Ile rejestrów xmm posiadają w trybie EM64T procesory Intel**",
    "answers": {
      "a": "8",
      "b": "16",
      "c": "32",
      "d": "64",
      "e": "nie ma takich rejestrów"
    },
    "correctAnswer": "b",
    "explanation": "W trybie EM64T procesory Intel posiadają 16 rejestrów xmm. W trybie IA-32 jest ich 8, a przy AVX512 liczba ta wzrasta do 32 [19]."
  },
  {
    "question": "Ile rejestrów ymm używają w trybie x86 procesory intel**",
    "answers": {
      "a": "8",
      "b": "16",
      "c": "32",
      "d": "64",
      "e": "nie ma takich rejestrów"
    },
    "correctAnswer": "a",
    "explanation": "W trybie x86 procesory Intel mają dostęp do 8 rejestrów ymm [20]."
  },
  {
    "question": "Ile rejestrów ogólnego przeznaczenia dodał Intel w trybie EM64T do procesorów**",
    "answers": {
      "a": "8",
      "b": "16",
      "c": "32",
      "d": "64",
      "e": "nie dodał"
    },
    "correctAnswer": "a",
    "explanation": "Intel w trybie EM64T dodał 8 nowych rejestrów ogólnego przeznaczenia (r8-r15) [20]."
  },
  {
    "question": "Ile rejestrów segmentowych występuje w trybie IA-32 procesorów Intel**",
    "answers": {
      "a": "2",
      "b": "4",
      "c": "6",
      "d": "8",
      "e": "żadne z wymienionych"
    },
    "correctAnswer": "c",
    "explanation": "W trybie IA-32 (a także w EM64T) występuje 6 rejestrów segmentowych: cs, ds, es, ss, fs, gs [20]."
  },
  {
    "question": "Do odwołanie się do zmiennych lokalnych podprogramu stosuje się segment wskazany przez rejestr**",
    "answers": {
      "a": "cs",
      "b": "ds",
      "c": "es",
      "d": "ss",
      "e": "gs"
    },
    "correctAnswer": "b",
    "explanation": "W segmencie `ds` znajdują się m.in. zmienne lokalne [21]."
  },
  {
    "question": "Do odwołania się do zmiennych lokalnych stosuje się rejestr**",
    "answers": {
      "a": "eax",
      "b": "ebx",
      "c": "ebp",
      "d": "esi",
      "e": "ds"
    },
    "correctAnswer": "c",
    "explanation": "Rejestr `ebp` (base pointer) jest powszechnie używany jako wskaźnik do ramki stosu, gdzie przechowywane są zmienne lokalne. Chociaż źródło wspomina \"edp\" jako wskaźnik wierzchołka stosu [21], `ebp` jest typowym rejestrem dla zmiennych lokalnych."
  },
  {
    "question": "Rejestry mmx są**",
    "answers": {
      "a": "częścią rejestrów xmm",
      "b": "częścią rejestrów ymm",
      "c": "oddzielnymi rejestrami",
      "d": "częścią rejestrów koprocesora",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "d",
    "explanation": "Rejestry MMX to 64-bitowe rejestry, które są współdzielone z rejestrami koprocesora (FPU). Korzystają z tych samych fizycznych zasobów w procesorze [22]."
  },
  {
    "question": "Które rejestry (64-bitowe) są używane do przekazywania parametrów**",
    "answers": {
      "a": "rax, rbx, rcx, rdx",
      "b": "rbx, rcx, r6, xmm0",
      "c": "r8, r9, r10, r11",
      "d": "rdx, rbx, e10, r11",
      "e": "xmm0, rdx, r8, r9"
    },
    "correctAnswer": "e",
    "explanation": "W trybie 64-bitowym rejestry `rcx`, `rdx`, `r8`, `r9` oraz `xmm0-xmm3` służą do przekazania pierwszych 4 argumentów [23]. Opcja \"e\" zawiera podzbiór tych rejestrów."
  },
  {
    "question": "Parametry aktualne przechowuje się w segmencie**",
    "answers": {
      "a": "cs",
      "b": "ds",
      "c": "es",
      "d": "ss",
      "e": "fs"
    },
    "correctAnswer": "b",
    "explanation": "Rejestr `ds` służy do przechowywania aktualnych parametrów programu [23]."
  },
  {
    "question": "W którym trybie adresowania adres w pamięci zawiera się w kodzie rozkazu**",
    "answers": {
      "a": "bezpośrednim",
      "b": "rejestrowym",
      "c": "natychmiastowym",
      "d": "we wszystkich powyższych",
      "e": "w żadnym w powyższych"
    },
    "correctAnswer": "a",
    "explanation": "W trybie bezpośrednim operandem jest adres pamięci (wskaźnik), który zawiera się w kodzie rozkazu [24]."
  },
  {
    "question": "Prosty tryb adresowania występuje w instrukcji**",
    "answers": {
      "a": "inc ecx",
      "b": "mov edi, offset zmienna",
      "c": "mov zmienna, edx",
      "d": "or edx, [ebx]",
      "e": "mov [edi * 8 + tablica], edx"
    },
    "correctAnswer": "b",
    "explanation": "W trybie prostym (natychmiastowym) instrukcja jako argument dostaje stałą wartość. `offset zmienna` od razu przekazuje adres do instrukcji, co jest przykładem trybu natychmiastowego [25]."
  },
  {
    "question": "Indeksowy tryb adresowania występuje w instrukcji**",
    "answers": {
      "a": "inc ecx",
      "b": "mov edi, offset zmienna",
      "c": "mov zmienna, edx",
      "d": "or edx, [ebx]",
      "e": "mov [edi * 8 + tablica], edx"
    },
    "correctAnswer": "e",
    "explanation": "W instrukcji `mov [edi * 8 + tablica], edx` występuje tryb pośredni-indeksowy, gdzie `edi` pełni rolę indeksu [25]."
  },
  {
    "question": "Pośredni bazowy tryb adresowania występuje w instrukcji**",
    "answers": {
      "a": "inc",
      "b": "mov edi, offset zmienna",
      "c": "or edx, [ebx + tab]",
      "d": "mov [edi * 8 + tablica], edx",
      "e": "mov zmienna, edx"
    },
    "correctAnswer": "c",
    "explanation": "W trybie pośrednim bazowym operandem jest wskaźnik z przesunięciem, co jest widoczne w instrukcji `or edx, [ebx + tab]`, gdzie `ebx` jest bazą, a `tab` przesunięciem [25]."
  },
  {
    "question": "Która instrukcja może zmienić rejestr cs**",
    "answers": {
      "a": "xlatb",
      "b": "call",
      "c": "les",
      "d": "jnz",
      "e": "stc"
    },
    "correctAnswer": "b",
    "explanation": "Instrukcja `call` wywołuje podprogram, co może spowodować zmianę segmentu kodu, a tym samym zmianę rejestru `cs` [26, 27]."
  },
  {
    "question": "Instrukcja mov zmienia flagi**",
    "answers": {
      "a": "ZF",
      "b": "SF",
      "c": "CF",
      "d": "wszystkie powyższe",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "e",
    "explanation": "Instrukcja `mov` nie wpływa na flagi; przesyła tylko zawartość źródła do celu [26]."
  },
  {
    "question": "Instrukcja dec zmienia flagi**",
    "answers": {
      "a": "OZAPC",
      "b": "OSAPC",
      "c": "OSZPC",
      "d": "OSZAC",
      "e": "OSZAP"
    },
    "correctAnswer": "e",
    "explanation": "Instrukcje `inc` i `dec` są jedynymi podstawowymi operacjami arytmetycznymi, które nie wpływają na flagę `CF`. Zmieniają flagi `OF`, `SF`, `ZF`, `AF`, `PF` [28]."
  },
  {
    "question": "Która z instrukcji nie jest poprawna**",
    "answers": {
      "a": "fsub",
      "b": "fsubp st, st(1)",
      "c": "fmulp st(4)",
      "d": "fsubr st(1), st",
      "e": "fsubrp st(1), st"
    },
    "correctAnswer": "b",
    "explanation": "Zgodnie ze źródłem, `fsubp st, st(1)` jest problematyczne, ponieważ po odejmowaniu zdejmuje liczbę z wierzchołka stosu, co może prowadzić do utraty wyniku [29]. `fsubrp` jest instrukcją poprawną [29]."
  },
  {
    "question": "Która z instrukcji jest poprawna**",
    "answers": {
      "a": "fmulp st(4)",
      "b": "fadd st(2), st(1)",
      "c": "fsubrp st(3), st",
      "d": "faddp st, st(2)",
      "e": "fsqrt st(1)"
    },
    "correctAnswer": "c",
    "explanation": "Instrukcja `fsubrp` jest poprawna, podczas gdy pozostałe funkcje mają nieprawidłową składnię, liczbę argumentów lub błąd logiczny [29]."
  },
  {
    "question": "Do wydobycia najmłodszego bitu równego 1 służy instrukcja**",
    "answers": {
      "a": "xgetbv",
      "b": "lzcnt",
      "c": "bextr",
      "d": "tzcnt",
      "e": "blsi"
    },
    "correctAnswer": "e",
    "explanation": "Instrukcja `blsi` izoluje z rejestru najmłodszy bit równy 1 i umieszcza go w rejestrze celu [15, 29, 30]."
  },
  {
    "question": "Która instrukcja sprawdza poprawność indeksu tablicy**",
    "answers": {
      "a": "enter",
      "b": "bounds",
      "c": "check",
      "d": "bound",
      "e": "żadna z powyższych"
    },
    "correctAnswer": "d",
    "explanation": "Instrukcja `bound` służy do sprawdzania, czy wartość indeksu tablicy mieści się w określonych granicach. Jeśli indeks wykracza poza granice, zgłaszany jest wyjątek [30, 31]."
  },
  {
    "question": "Która z instrukcji umożliwia dodawanie całkowite**",
    "answers": {
      "a": "lea",
      "b": "sub",
      "c": "addx",
      "d": "faddi",
      "e": "żadna z powyższych"
    },
    "correctAnswer": "a",
    "explanation": "Instrukcja `lea` (load effective address) umożliwia różne operacje matematyczne, w tym dodawanie całkowite, np. `lea eax, [ebx + 4]` [31, 32]."
  },
  {
    "question": "Która z instrukcji umożliwia dzielenie przez 8?",
    "answers": {
      "a": "btc",
      "b": "sbb",
      "c": "cmpxchg8b",
      "d": "sar",
      "e": "rcr"
    },
    "correctAnswer": "d",
    "explanation": ""
  },
  {
    "question": "Która instrukcja operuje na rejestrze al**",
    "answers": {
      "a": "xlatb",
      "b": "lss",
      "c": "movsxd",
      "d": "cli",
      "e": "żadna z powyższych"
    },
    "correctAnswer": "a",
    "explanation": "Instrukcja `xlatb` ma przypisane na stałe działanie na rejestrze `al` [31]."
  },
  {
    "question": "Wykonanie instrukcji push [edx] / pop [ebx] odpowiadałoby instrukcji:**",
    "answers": {
      "a": "xor [edx], [ebx]",
      "b": "xchg edx, ebx",
      "c": "fxch [edx], [ebx]",
      "d": "xchg [edx], [ebx]",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "e",
    "explanation": "Żadna z podanych instrukcji nie odpowiada dokładnie działaniu `push [edx]` i `pop [ebx]`. Mimo że `xchg [edx], [ebx]` jest najbliżej, nie używa stosu [33]."
  },
  {
    "question": "Która z instrukcji umożliwia dodanie trzech wartości**",
    "answers": {
      "a": "add",
      "b": "xadd",
      "c": "iadd",
      "d": "lea",
      "e": "cwde"
    },
    "correctAnswer": "d",
    "explanation": "Instrukcja `lea` może być wykorzystana do dodawania trzech wartości, np. `lea eax, [ebx + ecx + edx]` [32]."
  },
  {
    "question": "Która z instrukcji pozwala na podanie dwóch argumentów z pamięci**",
    "answers": {
      "a": "mov",
      "b": "lods",
      "c": "stos",
      "d": "scas",
      "e": "żadna z powyższych"
    },
    "correctAnswer": "e",
    "explanation": "Instrukcja `mov` może przyjąć tylko jeden argument z pamięci, a instrukcje łańcuchowe (`lods`, `stos`, `scas`) są jednoargumentowe [34]."
  },
  {
    "question": "Do policzenia starszych bitów równych 0 służy instrukcja**",
    "answers": {
      "a": "bsf",
      "b": "lzcnt",
      "c": "btr",
      "d": "bextr",
      "e": "rdtsc"
    },
    "correctAnswer": "b",
    "explanation": "Instrukcja `lzcnt` liczy liczbę wiodących (starszych) bitów równych 0 w liczbie zapisanej w rejestrze [35]."
  },
  {
    "question": "Która z instrukcji tworzy ramę stosu**",
    "answers": {
      "a": "push",
      "b": "call",
      "c": "enter",
      "d": "int",
      "e": "leave"
    },
    "correctAnswer": "c",
    "explanation": "Instrukcja `enter` tworzy ramę stosu [36]."
  },
  {
    "question": "Przeszukiwanie bitów wstecz realizuje instrukcja**",
    "answers": {
      "a": "bts",
      "b": "btr",
      "c": "btc",
      "d": "bsf",
      "e": "bsr"
    },
    "correctAnswer": "e",
    "explanation": "Instrukcja `bsr` (bit scan reverse) przeszukuje bity wstecz [37]."
  },
  {
    "question": "Która z instrukcji pozwala na poszukanie podanego znaku w tekście**",
    "answers": {
      "a": "scasb",
      "b": "movsd",
      "c": "lodsw",
      "d": "cmpsb",
      "e": "stosw"
    },
    "correctAnswer": "a",
    "explanation": "Instrukcja `scasb` porównuje zawartość akumulatora z wartością w pamięci pod adresem `es:edi`, co umożliwia przeszukiwanie tekstu w poszukiwaniu znaku [37]."
  },
  {
    "question": "Która z instrukcji umożliwia wpisanie wartości do dwu rejestrów**",
    "answers": {
      "a": "rcl",
      "b": "movbe",
      "c": "les",
      "d": "movbe",
      "e": "żadna z powyższych"
    },
    "correctAnswer": "c",
    "explanation": "Źródło odnosi się do instrukcji `les` jako tej, która \"wpisuje wartość do rejestru ds:arg1\" [38], oraz \"ładuje dane do dwóch rejestrów: rejestru ogólnego przeznaczenia oraz rejestru segmentowego es\" [27, 35]."
  },
  {
    "question": "Która z instrukcji nie jest poprawna**",
    "answers": {
      "a": "fcmovne",
      "b": "fcmovnbe",
      "c": "fcmovnu",
      "d": "fcmovnb",
      "e": "fcmovl"
    },
    "correctAnswer": "c",
    "explanation": "Nie istnieje taka instrukcja jak `fcmovnu`. Pozostałe to poprawne instrukcje przesłania warunkowego dla liczb zmiennoprzecinkowych [38]."
  },
  {
    "question": "Prefiks lock może odnosić się do instrukcji**",
    "answers": {
      "a": "nop",
      "b": "xchg",
      "c": "cmp",
      "d": "mov",
      "e": "fdiv"
    },
    "correctAnswer": "b",
    "explanation": "Prefiks `lock` może odnosić się do instrukcji `xchg` (oraz innych, takich jak `add`, `adc`, `and`, `btr`, `bts`, `cmpxchg`, `dec`, `inc`, `neg`, `not`, `or`, `sbb`, `sub`, `xor`, `xadd`) [4, 38, 39]."
  },
  {
    "question": "Prefiks lock nie odnosi się do instrukcji**",
    "answers": {
      "a": "lea",
      "b": "btr",
      "c": "xchg",
      "d": "cmpschg8b",
      "e": "neg"
    },
    "correctAnswer": "a",
    "explanation": "Instrukcja `lea` nie jest wymieniona na liście instrukcji, do których może odnosić się prefiks `lock` [39]."
  },
  {
    "question": "Która z instrukcji zmienia flagę CF**",
    "answers": {
      "a": "bswap",
      "b": "dec",
      "c": "cwd",
      "d": "fmul",
      "e": "fcomi"
    },
    "correctAnswer": "e",
    "explanation": "Instrukcja `fcomi` jest instrukcją porównującą, która wpływa na flagi procesora, w tym na flagę `CF` (Carry Flag) [39]."
  },
  {
    "question": "Która z instrukcji zmienia flagę C:",
    "answers": {
      "a": "jnc",
      "b": "dec",
      "c": "adcx",
      "d": "fxch",
      "e": "cqo"
    },
    "correctAnswer": "c",
    "explanation": ""
  },
  {
    "question": "Która z instrukcji nie zmienia flagi ZF**",
    "answers": {
      "a": "ficom",
      "b": "neg",
      "c": "dec",
      "d": "cmp",
      "e": "xadd"
    },
    "correctAnswer": "a",
    "explanation": "Instrukcja `ficom` porównuje liczby całkowite i wpływa na flagi koprocesora, a nie na flagi procesora, stąd nie zmienia flagi `ZF` (Zero Flag) [39, 40]."
  },
  {
    "question": "Która z instrukcji nie zmienia flagi PF**",
    "answers": {
      "a": "dec",
      "b": "cmp",
      "c": "paddd",
      "d": "xadd",
      "e": "fcomi"
    },
    "correctAnswer": "c",
    "explanation": "Instrukcje MMX, takie jak `paddd`, nie wpływają na rejestr flag, w tym na flagę `PF` (Parity Flag) [40]."
  },
  {
    "question": "Która z instrukcji nie zmienia flagi CF**",
    "answers": {
      "a": "cmc",
      "b": "add",
      "c": "stc",
      "d": "clc",
      "e": "inc"
    },
    "correctAnswer": "e",
    "explanation": "Instrukcje `inc` i `dec` są jedynymi podstawowymi operacjami arytmetycznymi, które nie wpływają na flagę `CF` [41]."
  },
  {
    "question": "Do prostego szyfrowania danych może służyć instrukcja**",
    "answers": {
      "a": "movsd",
      "b": "btr",
      "c": "cwde",
      "d": "xlatb",
      "e": "les"
    },
    "correctAnswer": "d",
    "explanation": "Instrukcja `xlatb` dokonuje tłumaczenia w oparciu o tablicę translacji i może służyć do prostego szyfrowania [41]."
  },
  {
    "question": "Która z instrukcji dla liczb ze znakiem przesyła dla warunku większości**",
    "answers": {
      "a": "movg",
      "b": "movae",
      "c": "cmovnle",
      "d": "cmovnbe",
      "e": "cmpa"
    },
    "correctAnswer": "c",
    "explanation": "Dla liczb ze znakiem, warunek \"większości\" (`greater`) jest równoważny warunkowi \"nie mniejsze lub równe\" (`nle`), co realizuje instrukcja `cmovnle` [42]."
  },
  {
    "question": "Która instrukcja dla liczb bez znaku zamienia bajt na podwójne słowo**",
    "answers": {
      "a": "xlatb",
      "b": "movzx",
      "c": "cbw",
      "d": "cbdw",
      "e": "bswap"
    },
    "correctAnswer": "b",
    "explanation": "Instrukcja `movzx` przesyła źródło do celu z dopisaniem zer na starszych bitach, co efektywnie zamienia bajt na podwójne słowo bez zachowania znaku [42]."
  },
  {
    "question": "Która z instrukcji wpisuje 1 do flagi CF**",
    "answers": {
      "a": "stc",
      "b": "clc",
      "c": "cmc",
      "d": "cld",
      "e": "std"
    },
    "correctAnswer": "a",
    "explanation": "Instrukcja `stc` (set carry flag) ustawia flagę `CF` na 1 [42]."
  },
  {
    "question": "Która instrukcja wpisuje 0 do flagi CF**",
    "answers": {
      "a": "cmc",
      "b": "cld",
      "c": "stc",
      "d": "clc",
      "e": "std"
    },
    "correctAnswer": "d",
    "explanation": "Instrukcja `clc` (clear carry flag) zeruje flagę `CF` (wpisuje 0) [42, 43]."
  },
  {
    "question": "Instrukcja fcomip zmienia flagi**",
    "answers": {
      "a": "APC",
      "b": "OAC",
      "c": "OSZ",
      "d": "OZC",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "e",
    "explanation": "Instrukcja `fcomip` wpływa na flagi procesora: `ZF` (Zero Flag), `PF` (Parity Flag) i `CF` (Carry Flag) [43]. Żadna z podanych opcji (`APC`, `OAC`, `OSZ`, `OZC`) nie odpowiada temu zestawowi flag."
  },
  {
    "question": "Instrukcja fcompp zmienia flagi**",
    "answers": {
      "a": "APC",
      "b": "OAC",
      "c": "OSZ",
      "d": "OZC",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "a",
    "explanation": "Instrukcja `fcompp` wpływa na flagi koprocesora: `C3`, `C2`, `C0` [44]. `APC` prawdopodobnie odnosi się do tych flag."
  },
  {
    "question": "Wykonując instrukcję push byte ptr [eax], procesor używa segmentów**",
    "answers": {
      "a": "cs i ds",
      "b": "es i ds",
      "c": "ds i ss",
      "d": "ss i gs",
      "e": "fs i cs"
    },
    "correctAnswer": "c",
    "explanation": "Instrukcja `push byte ptr [eax]` odwołuje się do segmentu `ds` ze względu na użycie `eax` (rejestry danych), a operacja `push` zawsze odnosi się do segmentu stosu (`ss`) [44]."
  },
  {
    "question": "Instrukcja add al, 80h w programie neguje jakie flagi**",
    "answers": {
      "a": "CF i PF",
      "b": "ZF i CF",
      "c": "AF i ZF",
      "d": "PF i SF",
      "e": "SF i CF"
    },
    "correctAnswer": "e",
    "explanation": "Dodawanie liczby z ustawionym najbardziej znaczącym bitem (jak 80h) może spowodować przeniesienie (`CF`) oraz zmianę znaku (`SF`) [45]."
  },
  {
    "question": "Po wykonaniu, której instrukcji zawartość al zmieni się z 0a5h na 5ah**",
    "answers": {
      "a": "or al, 5ah",
      "b": "not al",
      "c": "rol al, 1",
      "d": "shl al, 1",
      "e": "mov 5ah, al"
    },
    "correctAnswer": "b",
    "explanation": "Wartość `0a5h` binarnie to `10100101`. Instrukcja `not al` neguje wszystkie bity, co daje `01011010` (czyli `5ah`) [45]."
  },
  {
    "question": "Po wykonaniu instrukcji: mov eax, 0f0f0f0fh, mov edx, 87654321h, not ax, inc dx, and edx, eax rejestr edx będzie zawierał**",
    "answers": {
      "a": "07050301h",
      "b": "80604020h",
      "c": "07054020h",
      "d": "80600301",
      "e": "07054022"
    },
    "correctAnswer": "c",
    "explanation": "1.  `eax` = `0f0f0f0fh`\n2.  `edx` = `87654321h`\n3.  `not ax` zmienia `ax` (`0f0fh`) na `f0f0h`, więc `eax` = `0f0ff0f0h` [46].\n4.  `inc dx` zmienia `dx` (`4321h`) na `4322h`, więc `edx` = `87654322h` [46].\n5.  `and edx, eax` ( `87654322h` AND `0f0ff0f0h`) daje `07054020h` [46]."
  },
  {
    "question": "Po wykonaniu instrukcji: mov ecx, 01020304h, mov eax, 87654321h, shr eax, cl, btr eax, 1 rejestr eax będzie zawierał:**",
    "answers": {
      "a": "08765432h",
      "b": "0f8765432h",
      "c": "043b2a190h",
      "d": "0c3b2a190h",
      "e": "08765430h"
    },
    "correctAnswer": "e",
    "explanation": "1.  `eax` = `87654321h`\n2.  `shr eax, cl` (gdzie `cl` = `4`). `eax` = `08765432h` [47].\n3.  `btr eax, 1` (testuje i zeruje bit 1). Bit 1 w `08765432h` jest ustawiony. Po operacji `eax` = `08765430h` [47]."
  },
  {
    "question": "Podaj wartość eax po wykonaniu programu: mov al, 0c0h, movsx eax, al, mov ah, al, or eax, 11214181h, and eax, 0afbfcfdfh**",
    "answers": {
      "a": "0afbfcfdfh",
      "b": "0a1b1c1d1h",
      "c": "1112c1d1h",
      "d": "0afbfc1c1h",
      "e": "0a1b14f8fh"
    },
    "correctAnswer": "d",
    "explanation": "1.  `mov al, 0c0h` -> `al` = `0c0h`\n2.  `movsx eax, al` -> `eax` = `fffffc0h` [47]\n3.  `mov ah, al` -> `eax` = `ffffc0c0h` [47]\n4.  `or eax, 11214181h` -> `eax` = `ffffc1c1h` [47]\n5.  `and eax, 0afbfcfdfh` -> `eax` = `0afbfc1c1h` [47]"
  },
  {
    "question": "Po wykonaniu instrukcji: mov ecx, 11223344h, mov eax, 87654321h, shr eax, cl, bts eax, 0 rejestr eax będzie zawierał**",
    "answers": {
      "a": "08765433h",
      "b": "08765432h",
      "c": "043b2a190h",
      "d": "0c3b2a190h",
      "e": "021436587h"
    },
    "correctAnswer": "a",
    "explanation": "1.  `eax` = `87654321h`\n2.  `shr eax, cl` (gdzie `cl` = `44h` mod 32, czyli `4`). `eax` = `08765432h` [47].\n3.  `bts eax, 0` (testuje i ustawia bit 0). Bit 0 w `08765432h` jest zerowy. Po operacji `eax` = `08765433h` [47]."
  },
  {
    "question": "Po wykonaniu instrukcji: mov edx, 159a01h, bsf eax, edx rejestr eax będzie zawierał:**",
    "answers": {
      "a": "00000001h",
      "b": "00000014h",
      "c": "00159a01h",
      "d": "019a1500h",
      "e": "żadna z powyższych"
    },
    "correctAnswer": "e",
    "explanation": "Instrukcja `bsf` (bit scan forward) szuka najmłodszego bitu ustawionego na 1. Wartość `159a01h` ma bit 0 ustawiony, więc `eax` będzie zawierał `0`. Ponieważ `0` nie jest jedną z opcji, poprawną odpowiedzią jest \"żadna z powyższych\" [48, 49]."
  },
  {
    "question": "Ile dodawań może maksymalnie zrealizować instrukcja AVX**",
    "answers": {
      "a": "64",
      "b": "32",
      "c": "16",
      "d": "8",
      "e": "4"
    },
    "correctAnswer": "b",
    "explanation": "Rejestry AVX (ymm) mają długość 256 bitów, co odpowiada 32 bajtom. Maksymalnie 32 dodawania na bajtach mogą być przeprowadzone jednocześnie [49]."
  },
  {
    "question": "Do ilu bajtów wyrównania adresu wymaga instrukcja vmovdqu ymm4, tablica**",
    "answers": {
      "a": "32",
      "b": "16",
      "c": "8",
      "d": "4",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "e",
    "explanation": "Instrukcja `vmovdqu` jest zaprojektowana do pracy z niewyrównanymi adresami, dlatego nie wymaga konkretnego wyrównania [50]."
  },
  {
    "question": "Ile bajtów zawiera się w rejestrach ymm**",
    "answers": {
      "a": "8",
      "b": "16",
      "c": "32",
      "d": "256",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "c",
    "explanation": "Rejestr `ymm` ma 256 bitów, co odpowiada 32 bajtom (256/8 = 32) [50]."
  },
  {
    "question": "Do zmiany kolejności słów w rejestrze mmx służy instrukcja**",
    "answers": {
      "a": "ldmxcsr",
      "b": "pmovmskb",
      "c": "cmovnge",
      "d": "psadbw",
      "e": "pshufw"
    },
    "correctAnswer": "e",
    "explanation": "Instrukcja `pshufw` służy do tasowania (zmiany kolejności) słów w rejestrze MMX [50]."
  },
  {
    "question": "Do zmiany kolejności słów w rejestrze mmx służy instrukcja**",
    "answers": {
      "a": "psadbw",
      "b": "ldmxcsr",
      "c": "pmovmskb",
      "d": "pextrw",
      "e": "żadna z powyższych"
    },
    "correctAnswer": "e",
    "explanation": ""
  },
  {
    "question": "Pakowanie z nasyceniem podwójnych słów ze znakiem do słów realizuje instrukcja**",
    "answers": {
      "a": "packsswb",
      "b": "packssdw",
      "c": "packusdw",
      "d": "packuswd",
      "e": "packsudw"
    },
    "correctAnswer": "b",
    "explanation": "Instrukcja `packssdw` realizuje pakowanie z nasyceniem podwójnych słów ze znakiem do słów [51]."
  },
  {
    "question": "Która operacja konwertuje wektor liczb podwójnej precyzji na wektor liczb pojedynczej precyzji**",
    "answers": {
      "a": "vcvtsd2ss",
      "b": "vcvtps2pd",
      "c": "vcvtpd2ps",
      "d": "vcvtsi2ss",
      "e": "żadna z powyższych"
    },
    "correctAnswer": "c",
    "explanation": "Instrukcja `vcvtpd2ps` konwertuje wektor liczb zmiennoprzecinkowych podwójnej precyzji na wektor liczb zmiennoprzecinkowych pojedynczej precyzji w rejestrze `ymm` [1, 51]."
  },
  {
    "question": "Przekroczenie zakresu liczb całkowitych ze znakiem wskazuje flaga**",
    "answers": {
      "a": "CF",
      "b": "AF",
      "c": "SF",
      "d": "PF",
      "e": "żadna z powyższych"
    },
    "correctAnswer": "e",
    "explanation": "Przekroczenie zakresu liczb całkowitych ze znakiem jest wskazywane przez flagę `OF` (Overflow Flag), a nie żadną z podanych opcji [52]."
  },
  {
    "question": "Rejestry ymm Intel wprowadził dla zestawu instrukcji**",
    "answers": {
      "a": "MMX",
      "b": "SSE",
      "c": "AVX",
      "d": "AVX2",
      "e": "nie ma takich rejestrów"
    },
    "correctAnswer": "c",
    "explanation": "Rejestry `ymm` zostały wprowadzone przez firmę Intel w związku z rozszerzeniem zestawu instrukcji AVX [52, 53]."
  },
  {
    "question": "Ile rejestrów Rnr dodano w trybie 64-bitowym procesorów Intel**",
    "answers": {
      "a": "64",
      "b": "8",
      "c": "4",
      "d": "2",
      "e": "nie ma takich rejestrów"
    },
    "correctAnswer": "b",
    "explanation": "W trybie 64-bitowym procesorów Intel dodano 8 nowych rejestrów ogólnego przeznaczenia o nazwach od `r8` do `r15` [53]."
  },
  {
    "question": "Operację przesłania bez użycia pamięci podręcznej w AVX realizuje instrukcja**",
    "answers": {
      "a": "vmovdqu",
      "b": "vmaskmovdqu",
      "c": "vpshufhw",
      "d": "vmovntdq",
      "e": "vpunpcklqdq"
    },
    "correctAnswer": "d",
    "explanation": "Instrukcja `vmovntdq` służy do przesyłania danych z rejestrów SIMD do pamięci bez użycia pamięci podręcznej [53]."
  },
  {
    "question": "Która instrukcja nie zmienia flagi CF**",
    "answers": {
      "a": "cmpxchg",
      "b": "fcomi",
      "c": "imul",
      "d": "adox",
      "e": "wszystkie powyższe"
    },
    "correctAnswer": "d",
    "explanation": "Instrukcja `adox` sumuje wartości operandu z rejestrem docelowym i modyfikuje flagę `OF`, ale nie zmienia flagi `CF` [55]."
  },
  {
    "question": "Która z instrukcji jest wykorzystywana w trakcie przenoszenia flag C3, C2 i C0 do flag ZF, PF, CF**",
    "answers": {
      "a": "sahf",
      "b": "cmc",
      "c": "fclex",
      "d": "fldcw",
      "e": "fstf"
    },
    "correctAnswer": "a",
    "explanation": "Instrukcja `sahf` przenosi zawartość rejestru `ah` do rejestru flag. W połączeniu z `fstsw` (lub `fnstsw`) umożliwia przeniesienie flag koprocesora do flag procesora [55]."
  },
  {
    "question": "Która z instrukcji nie korzysta z flag C3, C2 i C0",
    "answers": {
      "a": "fist",
      "b": "ficomp",
      "c": "fxam",
      "d": "fcomip",
      "e": "fstsw"
    },
    "correctAnswer": "d",
    "explanation": "Instrukcja `fcomip` jako jedyna korzysta z flag procesora"
  },
  {
    "question": "Która z instrukcji pozwala na wypełnienie podanym znakiem tekstu**",
    "answers": {
      "a": "movsd",
      "b": "stosw",
      "c": "lodsw",
      "d": "cmpsb",
      "e": "scasb"
    },
    "correctAnswer": "b",
    "explanation": "Instrukcja `stosw` przesyła zawartość akumulatora (słowo) do pamięci wskazywanej przez `es:edi`, co może służyć do wypełniania tekstu [56]. Choć dla bajtów byłoby to `stosb`, `stosw` jest jedyną opcją pozwalającą na zapis z rejestru do pamięci w tym kontekście."
  },
  {
    "question": "Prefiks lock może odnosić się do instrukcji**",
    "answers": {
      "a": "emms",
      "b": "fwait",
      "c": "bts",
      "d": "cmp",
      "e": "cmc"
    },
    "correctAnswer": "c",
    "explanation": "Prefiks `lock` może odnosić się do instrukcji `bts` (bit test and set) [56, 57]."
  },
  {
    "question": "Ile rejestrów zmm posiadają procesory Intel z rozszerzeniem AVX512**",
    "answers": {
      "a": "8",
      "b": "16",
      "c": "32",
      "d": "64",
      "e": "nie ma takich rejestrów"
    },
    "correctAnswer": "c",
    "explanation": "Procesory Intel z rozszerzeniem AVX-512 posiadają 32 rejestry `zmm`, które mają długość 512 bitów [57]."
  },
  {
    "question": "Ile odejmowań można maksymalnie zrealizować dla rejestrów xmm**",
    "answers": {
      "a": "64",
      "b": "32",
      "c": "16",
      "d": "8",
      "e": "4"
    },
    "correctAnswer": "c",
    "explanation": "Rejestry `xmm` mają 128 bitów długości. Maksymalnie można przeprowadzić 16 operacji na 8-bitowych liczbach całkowitych (128/8 = 16) [58]."
  },
  {
    "question": "Operację AVX przesłania najstarszych bitów (bity znaku) każdego bajtu z rejestru ymm1 po kolei do rejestru r32/r64 realizuje instrukcja**",
    "answers": {
      "a": "vmaskmovdqu",
      "b": "vblendd",
      "c": "vgatherqq",
      "d": "vpmovmskb",
      "e": "żadna z powyższych"
    },
    "correctAnswer": "d",
    "explanation": "Instrukcja `vpmovmskb` (Packed Move Mask Bytes) przesyła bity znaku każdego bajtu z rejestru `ymm` do rejestru ogólnego przeznaczenia (`r32`/`r64`) [58]."
  },
  {
    "question": "Która operacja konwertuje liczbę pojedynczej precyzji na liczbę całkowitą**",
    "answers": {
      "a": "vcvtsd2ss",
      "b": "vcvtss2si",
      "c": "vcvtpd2ps",
      "d": "vcvtsd2si",
      "e": "żadna z powyższych"
    },
    "correctAnswer": "b",
    "explanation": "Instrukcja `vcvtss2si` konwertuje wartość zmiennoprzecinkową pojedynczej precyzji z rejestru `xmm` na wartość całkowitą w rejestrze ogólnym [59]."
  },
  {
    "question": "Do ilu bajtów wyrównania adresu wymaga instrukcja vmovapd ymm4, wektor**",
    "answers": {
      "a": "2",
      "b": "4",
      "c": "8",
      "d": "16",
      "e": "32"
    },
    "correctAnswer": "e",
    "explanation": "Instrukcja `vmovapd` (Move Aligned Packed Double) wymaga, aby adres źródłowy lub docelowy był wyrównany do 32 bajtów, ponieważ rejestr `ymm` ma długość 256 bitów (32 bajty) [60]."
  },
  {
    "question": "Która z instrukcji jest poprawna**",
    "answers": {
      "a": "fild eax",
      "b": "fbstp st(2)",
      "c": "fdivrp st(3), st",
      "d": "fcossin st(1)",
      "e": "fsubrp st, st(4)"
    },
    "correctAnswer": "c",
    "explanation": "Instrukcja `fdivrp` wykonuje odwrotną operację dzielenia na rejestrach koprocesora, dzieląc `st(3)` przez `st` i zapisując wynik w `st(3)`, co jest poprawną formą [60, 61]."
  },
  {
    "question": "Która z instrukcji nie zapisuje wyniku porównania we flagach koprocesora**",
    "answers": {
      "a": "fcom",
      "b": "fucomp",
      "c": "ficom",
      "d": "wszystkie powyższe nie zapisują",
      "e": "wszystkie powyższe zapisują"
    },
    "correctAnswer": "e",
    "explanation": "Instrukcje `fcom`, `fucomp` oraz `ficom` wszystkie wykonują porównania liczb zmiennoprzecinkowych i zapisują wyniki w flagach koprocesora (`C0`, `C2`, `C3`) [61]."
  },
  {
    "question": "Która z instrukcji umożliwia całkowitą operację typu: a + b + 3**",
    "answers": {
      "a": "lea",
      "b": "madd",
      "c": "addx",
      "d": "faddi",
      "e": "żadna z powyższych"
    },
    "correctAnswer": "a",
    "explanation": "Instrukcja `lea` (load effective address) może być wykorzystana do wykonywania operacji arytmetycznych, w tym dodawania stałej wartości do sumy dwóch rejestrów [62]."
  },
  {
    "question": "Która z instrukcji pozwala na wypełnienie tablicy podanym słowem 16-bitowym**",
    "answers": {
      "a": "cmpsw",
      "b": "scasw",
      "c": "movsw",
      "d": "lodsw",
      "e": "żadna z powyższych"
    },
    "correctAnswer": "e",
    "explanation": "Żadna z wymienionych instrukcji nie służy do wypełniania tablicy podanym słowem. Do tego celu należałoby użyć instrukcji `stosw` [62]."
  },
  {
    "question": "Instrukcja testowa dla kodów nieodpowiadających żadnej instrukcji to**",
    "answers": {
      "a": "int",
      "b": "ud2",
      "c": "enter",
      "d": "iret",
      "e": "nie ma takiej instrukcji"
    },
    "correctAnswer": "b",
    "explanation": "Instrukcja `ud2` (undefined instruction) jest specjalnie zaprojektowana do generowania wyjątku dla niepoprawnych lub nieznanych kodów instrukcji [63]."
  },
  {
    "question": "W wybranych procesorach Skylake Intel po raz pierwszy wprowadził**",
    "answers": {
      "a": "rejestry 64-bitowe",
      "b": "pięciostopniowy potok instrukcji",
      "c": "instrukcje SSE 4.2",
      "d": "dwa rodzaje rdzeni",
      "e": "instrukcje AVX512"
    },
    "correctAnswer": "e",
    "explanation": "Procesory Skylake w wybranych modelach po raz pierwszy wprowadziły wsparcie dla instrukcji `AVX-512` [63, 64]."
  },
  {
    "question": "Pierwszy procesor hybrydowy Intela to**",
    "answers": {
      "a": "Sandy Bridge",
      "b": "Hashwell",
      "c": "Skylake",
      "d": "Alder Lake",
      "e": "Raptor Lake"
    },
    "correctAnswer": "d",
    "explanation": "`Alder Lake` to pierwszy procesor hybrydowy Intela, który wprowadził architekturę z dwoma rodzajami rdzeni: Performance-cores (P-cores) i Efficiency-cores (E-cores) [15, 16, 64]."
  },
  {
    "question": "Która instrukcja może zmienić rejestr cs**",
    "answers": {
      "a": "xlatb",
      "b": "scasw",
      "c": "les",
      "d": "jmp",
      "e": "stc"
    },
    "correctAnswer": "d",
    "explanation": "Instrukcja `jmp` (jump) może zmienić rejestr `cs` (Code Segment), ponieważ podczas skoku dalekiego, procesor zmienia zarówno wskaźnik instrukcji (`ip`), jak i segment kodu [65]."
  },
  {
    "question": "Do policzenia młodszych bitów równych 0 służy instrukcja**",
    "answers": {
      "a": "xgetbv",
      "b": "tzcnt",
      "c": "lzcnt",
      "d": "beztr",
      "e": "blsi"
    },
    "correctAnswer": "b",
    "explanation": "Instrukcja `tzcnt` (trailing zero count) liczy liczbę kolejnych zer zaczynając od najmłodszych bitów (od bitu najmniej znaczącego) [65]."
  },
  {
    "question": "Ile bajtów mieści się w rejestrze r12**",
    "answers": {
      "a": "8",
      "b": "16",
      "c": "32",
      "d": "256",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "a",
    "explanation": "Rejestr `r12` jest 64-bitowy, co oznacza, że mieści 8 bajtów (64/8 = 8) [66]."
  },
  {
    "question": "Instrukcja mieszająca bajty z dwóch rejestrów na podstawie trzeciego to**",
    "answers": {
      "a": "vshufb",
      "b": "vpunpcklbw",
      "c": "vpackuswb",
      "d": "vhaddb",
      "e": "vpblendvb"
    },
    "correctAnswer": "e",
    "explanation": "Instrukcja `vpblendvb` (Packed Blend Bytes Variable) miesza bajty z dwóch rejestrów źródłowych na podstawie maski zawartej w trzecim rejestrze [67]."
  },
  {
    "question": "Operację AVX obliczającą przybliżoną wartość odwrotności pierwiastka z elementów wektora liczb rzeczywistych pojedynczej precyzji realizuje instrukcja**",
    "answers": {
      "a": "vrcpps",
      "b": "vrsqrtps",
      "c": "vsqrtps",
      "d": "vdpps",
      "e": "nie ma takiej instrukcji"
    },
    "correctAnswer": "b",
    "explanation": "Instrukcja `vrsqrtps` oblicza przybliżoną wartość odwrotności pierwiastka kwadratowego dla każdego elementu wektora liczb rzeczywistych pojedynczej precyzji [67]."
  },
  {
    "question": "Operację mieszania podwójnych słów z dwóch źródeł realizuje instrukcja:",
    "answers": {
      "a": "vpackssdw",
      "b": "vmovsxdq",
      "c": "vpblendd",
      "d": "vpunpckldq",
      "e": "vpermd"
    },
    "correctAnswer": "d",
    "explanation": "Instrukcja `vpunpckldq` jest jedyną poprawną tutaj instrukcją"
  },
  {
    "question": "Która operacja konwertuje liczbę podwójnej precyzji na liczbę pojedynczej precyzji**",
    "answers": {
      "a": "vcvtsd2ss",
      "b": "vcvtps2pd",
      "c": "vcvtpd2ps",
      "d": "vcvtsi2ss",
      "e": "żadna z powyższych"
    },
    "correctAnswer": "a",
    "explanation": "Instrukcja `vcvtsd2ss` konwertuje liczbę zmiennoprzecinkową podwójnej precyzji na liczbę zmiennoprzecinkową pojedynczej precyzji [68]."
  },
  {
    "question": "Podczas odejmowania skalarów z rejestrów wektorowych xmm pozostałe elementy celu**",
    "answers": {
      "a": "są zerowane",
      "b": "pozostają bez zmiany",
      "c": "pochodzą ze źródła 1",
      "d": "pochodzą ze źródła 2",
      "e": "są niezdefiniowane"
    },
    "correctAnswer": "c",
    "explanation": "Dla skalarów, pozostałe elementy są przepisywane ze źródła 1."
  },
  {
    "question": "Podczas dodawania skalarów z rejestrów wektorowych pozostałe elementy celu**",
    "answers": {
      "a": "pozostają bez zmiany",
      "b": "pochodzą ze źródła 1",
      "c": "pochodzą ze źródła 2",
      "d": "są zerowane",
      "e": "są niezdefiniowane"
    },
    "correctAnswer": "b",
    "explanation": "Dla skalarów, pozostałe elementy są przepisywane ze źródła 1."
  },
  {
    "question": "Do policzenia starszych bitów równych 0 służy instrukcja**",
    "answers": {
      "a": "bsf",
      "b": "lzcnt",
      "c": "btr",
      "d": "beztr",
      "e": "rdtsc"
    },
    "correctAnswer": "b",
    "explanation": "Instrukcja `lzcnt` służy do liczenia liczby wiodących (starszych) bitów równych 0 w liczbie zapisanej w rejestrze [35]."
  },
  {
    "question": "Która instrukcja zapisuje do dwu rejestrów**",
    "answers": {
      "a": "les",
      "b": "xlatb",
      "c": "movsd",
      "d": "btr",
      "e": "żadna z powyższych"
    },
    "correctAnswer": "a",
    "explanation": "Instrukcja `les` (load ES and pointer) ładuje dane do dwóch rejestrów: rejestru ogólnego przeznaczenia oraz rejestru segmentowego `es` [27, 35]."
  },
  {
    "question": "Która instrukcja może zmienić rejestr cs**",
    "answers": {
      "a": "xlatb",
      "b": "call",
      "c": "les",
      "d": "jnz",
      "e": "stc"
    },
    "correctAnswer": "b",
    "explanation": "Instrukcja `call` zmienia zarówno rejestr `ip`, jak i rejestr `cs`. To oznacza, że wywołanie dalekie może przenieść wykonanie programu do innego segmentu kodu, zmieniając wartość rejestru `cs` [27]."
  },
  {
    "question": "Pierwszy procesor wielordzeniowy Intela to**",
    "answers": {
      "a": "i486",
      "b": "Pentium II",
      "c": "Pentium 4",
      "d": "Sandy Bridge",
      "e": "Hashwell"
    },
    "correctAnswer": "c",
    "explanation": "Procesor `Pentium 4` był pierwszym procesorem Intela z dwoma rdzeniami, wprowadzonym w 2005 roku [15]."
  },
  {
    "question": "W procesorze Alder Lake Intel po raz pierwszy wprowadził**",
    "answers": {
      "a": "rejestry 64-bitowe",
      "b": "pięciostopniowy potok instrukcji",
      "c": "koprocesor matematyczny",
      "d": "dwa rodzaje rdzeni",
      "e": "generator liczb losowych"
    },
    "correctAnswer": "d",
    "explanation": "Procesor `Alder Lake` to pierwszy procesor Intela, który wprowadził hybrydową architekturę z dwoma rodzajami rdzeni: Performance-cores (P-cores) i Efficiency-cores (E-cores) [15, 16]."
  },
  {
    "question": "Przerwanie programowe wywołuje instrukcja**",
    "answers": {
      "a": "int",
      "b": "call",
      "c": "enter",
      "d": "iret",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "a",
    "explanation": "Instrukcja `int` służy do wywołania przerwania programowego. Pozwala na przekazywanie sterowania do odpowiedniej procedury obsługi przerwań [70]."
  },
  {
    "question": "Która instrukcja dla liczb ze znakiem zamienia słowo na podwójne słowo**",
    "answers": {
      "a": "movzx",
      "b": "cbw",
      "c": "cwde",
      "d": "xlatb",
      "e": "bswap"
    },
    "correctAnswer": "c",
    "explanation": "Instrukcja `cwde` (convert word to doubleword extended) zamienia zawartość rejestru `ax` na `eax`, rozszerzając słowo do podwójnego słowa z zachowaniem znaku liczby [70]."
  },
  {
    "question": "Operację zamiany słów na poczwórne słowa realizuje instrukcja**",
    "answers": {
      "a": "vpackssdw",
      "b": "vmaskmovdqu",
      "c": "vpunpckldq",
      "d": "vpermsq",
      "e": "vmovsxwq"
    },
    "correctAnswer": "c",
    "explanation": "Instrukcja `vpunpckldq` rozpakowuje i zamienia 32-bitowe słowa na 64-bitowe poczwórne słowa, przeplatając dane z dwóch rejestrów źródłowych [70, 71]."
  },
  {
    "question": "Operację AVX odczytu danych z podanych dowolnych elementów tablicy realizuje instrukcja**",
    "answers": {
      "a": "vpermq",
      "b": "vblendd",
      "c": "vgatherps",
      "d": "vgatherdps",
      "e": "żadna z powyższych"
    },
    "correctAnswer": "d",
    "explanation": "VGATHER[D/Q]P[S/D]"
  },
  {
    "question": "Operację AVX odczytu danych z podanych dowolnych elementów tablicy realizuje instrukcja**",
    "answers": {
      "a": "vgatherqq",
      "b": "vpermq",
      "c": "vblendd",
      "d": "vpshufhq",
      "e": "żadna z powyższych"
    },
    "correctAnswer": "e",
    "explanation": "VGATHER[D/Q]P[S/D]"
  },
  {
    "question": "Tryb prosty adresowania występuje w instrukcji**",
    "answers": {
      "a": "inc ecx",
      "b": "mov edi, offset zmienna",
      "c": "mov zmienna, edx",
      "d": "or edx, [ebx]",
      "e": "mov [edi * 8 + tablica], edx"
    },
    "correctAnswer": "b",
    "explanation": "W trybie prostym (natychmiastowym) operandem jest stała wartość, jak w przypadku instrukcji `mov edi, offset zmienna`, gdzie adres jest przekazywany bezpośrednio [25, 72]."
  },
  {
    "question": "Po wykonaniu instrukcji: mov eax, 0f0f00f0fh, mov edx, 87654321h, not ax, add dx, 7, add edx, eax rejestr edx będzie zawierał**",
    "answers": {
      "a": "80604020h",
      "b": "07070301h",
      "c": "07054020h",
      "d": "00600301h",
      "e": "07054022h"
    },
    "correctAnswer": "p",
    "explanation": "Źródło wyraźnie wskazuje, że \"Błędne zadanie, poprawna odpwiedź to: 78563418h\" [72]. Ponieważ prawidłowa odpowiedź nie znajduje się wśród opcji, pytanie jest uznane za błędne."
  },
  {
    "question": "Po wykonaniu której instrukcji zawartość al zmieni się z 0c9h na 36h**",
    "answers": {
      "a": "or al, 36h",
      "b": "not al",
      "c": "rcl al, 1",
      "d": "sal, al, 1",
      "e": "mov 36h, al"
    },
    "correctAnswer": "b",
    "explanation": "Wartość `0c9h` binarnie to `11001001`. Instrukcja `not al` neguje wszystkie bity, co daje `00110110` (czyli `36h`) [73]."
  },
  {
    "question": "Po wykonaniu instrukcji: mov edx, 0f459a01h, bswap edx rejestr edx będzie zawierał**",
    "answers": {
      "a": "0f459a01h",
      "b": "9a010f45h",
      "c": "10a954f0h",
      "d": "019a450fh",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "d",
    "explanation": "Instrukcja `bswap edx` zamienia kolejność bajtów w 32-bitowym rejestrze `edx`. Wartość `0f459a01h` po zamianie bajtów staje się `019a450fh` [73]."
  },
  {
    "question": "Po wykonaniu instrukcji: mov eax, 0f0f0f0fh, mov edx, 12345678h, not ax, inc dx, and edx, eax**",
    "answers": {
      "a": "02045070h",
      "b": "12345678h",
      "c": "10300609h",
      "d": "02040608h",
      "e": "02040609h"
    },
    "correctAnswer": "a",
    "explanation": "1.  `eax` = `0f0f0f0fh`\n2.  `edx` = `12345678h`\n3.  `not ax` zmienia `ax` (`0f0fh`) na `f0f0h`, więc `eax` = `0f0ff0f0h` [74].\n4.  `inc dx` zmienia `dx` (`5678h`) na `5679h`, więc `edx` = `12345679h` [74].\n5.  `and edx, eax` ( `12345679h` AND `0f0ff0f0h`) daje `02045070h` [74]."
  },
  {
    "question": "Która z instrukcji dla liczb ze znakiem zamienia bajt na podwójne słowo**",
    "answers": {
      "a": "movsx",
      "b": "cbw",
      "c": "cwde",
      "d": "xlatb",
      "e": "bswap"
    },
    "correctAnswer": "a",
    "explanation": "Instrukcja `movsx` (move with sign extend) kopiuje wartość źródłową (np. bajt) i rozszerza ją do większego rozmiaru (np. podwójnego słowa) z zachowaniem znaku [74]."
  },
  {
    "question": "Ile operacji na bajtach może wykonać jedna instrukcja MMX**",
    "answers": {
      "a": "4",
      "b": "8",
      "c": "16",
      "d": "32",
      "e": "64"
    },
    "correctAnswer": "b",
    "explanation": "Rejestry MMX mają długość 64 bitów, co pozwala na wykonywanie 8 operacji na bajtach jednocześnie (64/8 = 8) [75]."
  },
  {
    "question": "Po wykonaniu instrukcji: mov eax, 0f0f00f0fh, mov edx, 87654321h, rol ax, 4, add dx, 7, and edx, eax**",
    "answers": {
      "a": "80604020h",
      "b": "07050301h",
      "c": "07054020h",
      "d": "07004028h",
      "e": "07654320h"
    },
    "correctAnswer": "a",
    "explanation": "1.  `eax` = `0f0f00f0fh`\n2.  `edx` = `87654321h`\n3.  `rol ax, 4` zmienia `ax` (`00f0h`) na `0f00h`, więc `eax` = `0f0f0f00h` [75].\n4.  `add dx, 7` zmienia `dx` (`4321h`) na `4328h`, więc `edx` = `87654328h` [75].\n5.  `and edx, eax` ( `87654328h` AND `0f0f0f00h`) daje `80604020h` [75]."
  },
  {
    "question": "Po wykonaniu instrukcji: mov edx, 1000h, bsf eax, edx rejestr eax będzie zawierał**",
    "answers": {
      "a": "00000004h",
      "b": "0000000ch",
      "c": "00000012h",
      "d": "01000000h",
      "e": "żadna z powyższych"
    },
    "correctAnswer": "b",
    "explanation": "Instrukcja `bsf` (bit scan forward) szuka pierwszego bitu ustawionego na 1. Wartość `1000h` binarnie to `...0001 0000 0000 0000b`. Pierwszy ustawiony bit znajduje się na pozycji 12, więc do `eax` zostanie wpisana wartość `12`, co w heksadecymalnym zapisie odpowiada `0000000ch` [76]."
  },
  {
    "question": "Prefiks lock może odnosić się do instrukcji**",
    "answers": {
      "a": "nop",
      "b": "adc",
      "c": "cmp",
      "d": "cmc",
      "e": "fwait"
    },
    "correctAnswer": "b",
    "explanation": "Prefiks `lock` może odnosić się do instrukcji `adc` (add with carry) [4, 38]."
  },
  {
    "question": "Która z instrukcji dla liczb bez znaku przesyła dla warunku większości**",
    "answers": {
      "a": "movg",
      "b": "movae",
      "c": "cmovnle",
      "d": "cmovnbe",
      "e": "cmpa"
    },
    "correctAnswer": "d",
    "explanation": "Dla liczb bez znaku, warunek \"większości\" (`above`) odpowiada warunkowi \"nie mniejsze lub równe\" (`nbe`), co realizuje instrukcja `cmovnbe` [4]."
  },
  {
    "question": "Ile rejestrów ymm posiadają w trybie EM64T procesory Intel**",
    "answers": {
      "a": "8",
      "b": "16",
      "c": "32",
      "d": "64",
      "e": "nie ma takich rejestrów"
    },
    "correctAnswer": "b",
    "explanation": "W 64-bitowej architekturze Intel (tryb EM64T), procesory posiadają 16 rejestrów `ymm` (od `YMM0` do `YMM15`) [4, 77]."
  },
  {
    "question": "Tryb chroniony po raz pierwszy Intel wprowadził w procesorze:",
    "answers": {
      "a": "80186",
      "b": "80286",
      "c": "803086",
      "d": "80486 DX",
      "e": "Pentium II"
    },
    "correctAnswer": "b",
    "explanation": ""
  },
  {
    "question": "Superskalarność wynika z:",
    "answers": {
      "a": "wykonywania instrukcji w potoku",
      "b": "wykonywania instrukcji poza kolejnością",
      "c": "systemu o zredukowanej liczbie rozkazów",
      "d": "wykonywania spekulatywnego rozkazów",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "a",
    "explanation": ""
  },
  {
    "question": "W którym trybie adresowania wartość argumentu nie jest pobierana z pamięci danych:",
    "answers": {
      "a": "pośrednim-indeksowym",
      "b": "pośrednim-bazowym",
      "c": "natychmiastowym",
      "d": "rejestrowym",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "c",
    "explanation": ""
  },
  {
    "question": "Która z instrukcji jest poprawna:",
    "answers": {
      "a": "fbst bcdint",
      "b": "fchs st(3)",
      "c": "ftan",
      "d": "fcmovenbe st,st(3)",
      "e": "fsqrt st(4)"
    },
    "correctAnswer": "d",
    "explanation": ""
  },
  {
    "question": "Która z instrukcji nie zmienia flagi C:",
    "answers": {
      "a": "inc",
      "b": "adcx",
      "c": "neg",
      "d": "cmpxchg",
      "e": "wszystkie zmieniają"
    },
    "correctAnswer": "a",
    "explanation": "Instrukcja INC (inkrementacja) zmienia flagi OF, SF, ZF, AF, PF, ale zachowuje flagę CF (Carry Flag) bez zmian."
  },
  {
    "question": "Po wykonaniu instrukcji: mov eax, 0eca87531h | xor eax, 0f00f0ffch | shl eax, 0ch | bsr eax, eax",
    "answers": {
      "a": "0eca78531h",
      "b": "0a7853100h",
      "c": "000075000h",
      "d": "00000001fh",
      "e": "00000001eh"
    },
    "correctAnswer": "e",
    "explanation": ""
  },
  {
    "question": "Która z instrukcji nie zapisuje wyniku porównania w flagach koprocesora:",
    "answers": {
      "a": "fucomp",
      "b": "ftst",
      "c": "fcomip",
      "d": "wszystkie powyższe zapisują",
      "e": "wszysktie powyższe nie zapisują"
    },
    "correctAnswer": "c",
    "explanation": ""
  },
  {
    "question": "Która z instrukcji umożliwia całkowitą operację typu: 5*a+13?",
    "answers": {
      "a": "lea",
      "b": "madd",
      "c": "addx",
      "d": "fadd",
      "e": "żadna z powyższych"
    },
    "correctAnswer": "a",
    "explanation": ""
  },
  {
    "question": "Która z instrukcji pozwala na znalezienie w tablicy wartości różnej od podanego podwójnego słowa 32-bitowego?",
    "answers": {
      "a": "movsd",
      "b": "lodsd",
      "c": "cmpsd",
      "d": "scasd",
      "e": "żadna z powyższych"
    },
    "correctAnswer": "d",
    "explanation": ""
  },
  {
    "question": "Która instrukcja nie istnieje:",
    "answers": {
      "a": "std",
      "b": "stc",
      "c": "stz",
      "d": "sti",
      "e": "wszystkie istnieją"
    },
    "correctAnswer": "c",
    "explanation": ""
  },
  {
    "question": "W procesorach Skylake Intel po raz pierwszy wprowadził:",
    "answers": {
      "a": "rejestry 64-bitowe",
      "b": "pięciostopniowy potok instrukcji",
      "c": "dwa rodzaje rdzeni",
      "d": "instrukcje SSE 4.2",
      "e": "instrukcje AVX512"
    },
    "correctAnswer": "e",
    "explanation": ""
  },
  {
    "question": "Pierwszy procesor Intela wyposażony w instrukcje AVX to:",
    "answers": {
      "a": "Pentium",
      "b": "Pentium 4",
      "c": "Sandy Bridge",
      "d": "Haswell",
      "e": "Skylake"
    },
    "correctAnswer": "c",
    "explanation": ""
  },
  {
    "question": "Do wyzerowania najmłodszego bitu równego 1 służy instrukcja:",
    "answers": {
      "a": "popcnt",
      "b": "tzcnt",
      "c": "lzcnt",
      "d": "bextr",
      "e": "blsr"
    },
    "correctAnswer": "e",
    "explanation": ""
  },
  {
    "question": "Ile bajtów mieści się w rejestrze R8D:",
    "answers": {
      "a": "4",
      "b": "8",
      "c": "16",
      "d": "32",
      "e": "żadne z powyższych"
    },
    "correctAnswer": "a",
    "explanation": ""
  },
  {
    "question": "Instrukcja mieszająca liczby podwójnej precyzji z dwóch rejestrów na podstawie rejestru maski to:",
    "answers": {
      "a": "vshufpd",
      "b": "vblendvpd",
      "c": "vpackusdb",
      "d": "vhaddpd",
      "e": "vblendpd"
    },
    "correctAnswer": "b",
    "explanation": ""
  },
  {
    "question": "Która operacja konwertuje liczbę całkowitą na liczbę pojedynczej precyzji:",
    "answers": {
      "a": "vcvtsd2ss",
      "b": "vcvtss2sd",
      "c": "vcvtsi2ss",
      "d": "vcvtss2si",
      "e": "żadna z powyższych"
    },
    "correctAnswer": "c",
    "explanation": ""
  },
  {
    "question": "Do znalezienia indeksu najstarszego bitu równego 1 służy instrukcja:",
    "answers": {
      "a": "rdtsc",
      "b": "bsr",
      "c": "btr",
      "d": "bextr",
      "e": "tzcnt"
    },
    "correctAnswer": "c",
    "explanation": ""
  },
  {
    "question": "Operację przesłania z niewyrównanej pamięci realizuje instrukcja AVX",
    "answers": {
      "a": "vmovdqa",
      "b": "vmaskmovdqu",
      "c": "vmovntdq",
      "d": "vmovdqu",
      "e": "vpunkpcklqdq"
    },
    "correctAnswer": "d",
    "explanation": ""
  },
  {
    "question": "Podczas mnożenia liczb podwójnej precyzji (skalarów) z rejestrów wektorowych xmm bity (127..64) celu",
    "answers": {
      "a": "pozostają bez zmiany",
      "b": "pochodzą ze źródła 1",
      "c": "pochodzą ze źródła 2",
      "d": "są zerowane",
      "e": "są niezdefiniowane"
    },
    "correctAnswer": "b",
    "explanation": ""
  }
];