#include<stdio.h>
int main()
{
    int a=1,b=0;
    b=a++ + a++;
     // 1 + 2 use the value then increment it
    printf("\na=%d  b=%d",a,b);

    a = 1;
    b = ++a + ++a;
      //2 + 3
      // 3 + 3 first increment then use that means two times inc then use
    printf("\na=%d  b=%d",a,b);

    a=1;
    b=a++ + ++a ;
    //1 + 3 LtoR post then pre
    printf("\na=%d  b=%d",a,b);

    a=1;
    b=++a + a++;
      // 3+2 LtoR
      //2 + 2 and in memory a=3
      //3 + 2 then assign last pre a=3
    printf("\na=%d  b=%d",a,b);

/*compiler perform any operation first two values then move forward*/
     a=1;
     b=a++ + a++ + a++;
     //(1 + 2) + 3;
     //3+3
    printf("\na=%d  b=%d",a,b);

    a = 1;
    b = ++a + ++a + ++a;
        //2 +3 + ++a
        //3 + 3 + ++a
        //6 +4

    //(3 +3) + 4
    printf("\na=%d  b=%d",a,b);

    a=1;
    b=a++ + ++a + a++;
    //1 + 3 + a++
    //4 + 3
    // (1+3)+3
    printf("\na=%d  b=%d",a,b);

    a=1;
    b=++a + a++ + a++;
    // 2 +2 + a++
    //3 +2 + a++
    //5 +3
    //(3+2) + 3
    printf("\na=%d  b=%d",a,b);
    a=1;
    b=++a + a++ + ++a;
    //2 + 2 + ++a
    //3 + 2 + ++a
    //5 + 4


    a=1;
     b=a++ + a++ + a++ + a++;
     // 1 + 2 + a++ + a++
     //3 + 3 + a++
     //6 + 4
    printf("\n value a=%d  b=%d",a,b);

    a = 1;
    b = ++a + ++a + ++a + ++a;
    // 2 + 3 + ++a + ++a;
    //3 + 3+ ++a + ++a;
    //6 + 4 + ++a
    //10 + 5
    printf("\na=%d  b=%d",a,b);

    a=1;
    b=a++ + ++a + a++ + ++a;
    // ((1+3)+ 3) +5
    printf("\na=%d  b=%d",a,b);

    a=1;
    b=++a + a++ + a++ + ++a;
    //2 + 2 + a++ + ++a;
    //3 +2 + a++ + ++a;
    //5 + 3+ ++a;
    //8 +5
    //((3+2) + 3) + 5
    printf("\na=%d  b=%d",a,b);

    a=1;
    b=++a + a++ + ++a + a++;
    //2 +2
    //3+ 2
    // ((3+2) + 4) + 4
    printf("\na=%d  b=%d",a,b);

    a=6;
    b=a<10;
    printf("\nrelational operator  a=%d b=%d",a,b);

}
