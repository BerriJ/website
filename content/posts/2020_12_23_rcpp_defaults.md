+++
title = "Pre-specified variables as default arguments in Rcpp(armadillo)"
date = "2020-12-23"
+++

Lately, I'm using [Rcpp](https://dirk.eddelbuettel.com/code/rcpp.html) and [RcppArmadillo](https://dirk.eddelbuettel.com/code/rcpp.html) a lot to speed up the computational work of my current research project.

I stumbled over a lot of problems which are easily solved in R but a pain to get working in C++ Armadillo. So I thought, I'd share some of my solutions.

The first one is here. We want to create an R function `f` with argument `y` which defaults to `1:5`:

```R
f <- function(y = 1:5){
    return(2^y)
}
```

Straightforward in R right? Let's suppose we want to write this function using Rcpp(armadillo). I'm allways using this header for my .cpp files:

```C++
// [[Rcpp::depends(RcppArmadillo)]]
#include <RcppArmadillo.h>
using namespace arma;
```

 Intuitively I tried something like this:

```C++
// [[Rcpp::export]]
vec f_cpp(const vec &y = linspace(1, 5, 5)))
{
    return exp2(y);
}
```

However, this does not work because `linspace` can't be executed by arma. You can think of the arguments section as the place where Rcpp translates the R object to C++ objects. Neither R nor Cpp code will be executed there. But here is the good news: you can construct empty vectors in Rcpp and just check inside the body if they are empty. That is, we can write our function like this:

```C++

// [[Rcpp::export]]
vec f_cpp(Rcpp::NumericVector y = Rcpp::NumericVector::create())
{
    if (y.size() == 0)
    {
        y = linspace(1, 5, 5);
    }
    return exp2(y);
}
```

As you can see, I initialized an empty vector using Rcpp. Afterward, one can easily check if that vector is empty and apply the desired defaults. This recreates our R function and leaves us with the desired result.

Feel free to contact me via [mail](mailto:jonathan@berrisch.biz) for Feedback of any kind.