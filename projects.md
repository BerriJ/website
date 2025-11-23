
## Projects

Most of my projects are open-source and can be found on CRAN, [PyPi](https://pypi.org/search/?q=BerriJ), [GitHub](https://github.com/BerriJ) or my [personal GiTea instance](https://git.0n8.de/BerriJ) which is a project in itself. Below you find a non-exhaustive collection.

### OnlyQR - SVG QR Code Generator

A simplified, SVG-only QR code generator based on QRCode.js. This lightweight library generates clean, scalable SVG QR.

[https://onlyqr.0n8.de/](https://onlyqr.0n8.de/) | [Source](https://git.0n8.de/BerriJ/onlyqr)

### ENTSO-E API Python Package

A Python library for accessing ENTSO-E Transparency Platform API endpoints.

[docs](https://entsoe-apy.berrisch.biz/) | [PyPi](https://pypi.org/project/entsoe-apy/) | [GitHub](https://github.com/BerriJ/entsoe-apy)


### rcpptimer - Rcpp Tic-Toc Timer with OpenMP Support

We developed 'cpptimer', a straightforward tic-toc timer class for benchmarking C++ code to address this. Unlike existing solutions, 'cpptimer' supports overlapping timers and OpenMP parallelism. It also calculates summary statistics when benchmarking the same code segment multiple times. Being a header-only library, 'cpptimer' is easily bindable to higher-level languages.

[docs](https://rcpptimer.berrisch.biz/) | [GitHub](https://github.com/BerriJ/rcpptimer) | [CRAN](https://cran.r-project.org/web/packages/rcpptimer/index.html) | [Paper](https://arxiv.org/abs/2501.15856)

### ondil - A python package for online distributional learning

[docs](https://simon-hirsch.github.io/ondil/) | [GitHub](https://github.com/simon-hirsch/ondil) | [PyPi](https://pypi.org/project/ondil/) | [Paper](https://arxiv.org/abs/2407.08750)

### profoc - An R Package for Probabilistic Forecast Combination

This package implements methods which are proposed and discussed in [CRPS Learning](https://arxiv.org/abs/2102.00968).

[CRAN](https://cran.rstudio.com/web/packages/profoc/index.html) | [GitHub](https://github.com/BerriJ/profoc) | [Documentation](https://profoc.berrisch.biz/)

### dccpp - An R Package for fast computation of the distance covariance and distance correlation

The computation cost is only O(n log(n)) for the distance correlation (see Chaudhuri, Hu, 2019, arXiv, elsevier). The functions are written entirely in C++ to speed up the computation.

[CRAN](https://cran.r-project.org/web/packages/dccpp/index.html) | [GitHub](https://github.com/BerriJ/dccpp) | [Documentation](https://dccpp.berrisch.biz/)

### sstudentt - A python package implementing the skewed-student-t distribution

This package implements the skewed student-t distribution in python. Parameterized as described in Wurtz et. al (2006) [1]. An implementation in R is already existent [2].

[PyPi](https://pypi.org/project/sstudentt/) | [Github](https://github.com/BerriJ/sstudentt/edit/master/README.rst) | [Documentation](https://sstudentt.readthedocs.io/en/latest/)

## References

[1] Wurtz, Y. Chalabi, and L. Luksan. Parameter estimation of arma models with garch/aparch errors. an r and splus software implementation. Journal of Statistical Software, 2006.

[2] R Implementation: https://www.gamlss.com/wp-content/uploads/2018/01/DistributionsForModellingLocationScaleandShape.pdf
