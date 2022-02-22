+++
title = "Research"
date = "2021-05-27"
draft = false
+++

### CRPS Learning, 2021, Jonathan Berrisch & Florian Ziel, Journal of Econometrics

This paper treats how online learning algorithms can be used for the pointwise combination of probabilistic forecasts.

[Elsevier](https://authors.elsevier.com/a/1eKV815Dji7UNa)

[Pre-Print](https://arxiv.org/abs/2102.00968)

[Presentation](../slides/21_05_france)

[Presentation at the International Symposium on Forecasting (Short)](../slides/21_06_isf)

[Presentation at Elecricity Price Forecasting Group](../slides/21_11_epf)

[Presentation at 15TH RGS Doctoral Conference in economics](../slides/22_02_rgs)

### Distributional modeling and forecasting of natural gas prices, 2021, Jonathan Berrisch & Florian Ziel

This paper presents price forecasting studies for two essential European natural-gas products.

[Wiley](https://doi.org/10.1002/for.2853)

[Pre-Print](https://arxiv.org/abs/2010.06227) 

# Projects

## profoc - An R Package for Probabilistic Forecast Combination

This package implements methods which are proposed and discussed in [CRPS Learning](https://arxiv.org/abs/2102.00968).

[GitHub](https://github.com/BerriJ/profoc)

[Documentation](https://profoc.berrisch.biz/)

## sstudentt - A python package implementing the skewed-student-t distribution

This package implements the skewed student-t distribution in python. Parameterized as described in Wurtz et. al (2006) [1]. An implementation in R is already existent [2].

[Github](https://github.com/BerriJ/sstudentt/edit/master/README.rst)

[PyPi](https://pypi.org/project/sstudentt/)

[Documentation](https://sstudentt.readthedocs.io/en/latest/)

# Development

I develop most of my projects in a docker container that is publicly available for reuse and inspiration. This container makes it easy to reproduce results or develop projects like the profoc R package.

The most convenient way to start is using VS-Code. You can find instructions in the [GitHub Repo](https://github.com/BerriJ/devenv/tree/dev). However, the bare-bone Docker Container is also available and sufficient.

The Repository is available on [GitHub](https://github.com/BerriJ/devenv/tree/dev).

The docker container is also available on [GitHub](https://github.com/users/BerriJ/packages/container/devenv/versions)


# References

.. [1] Wurtz, Y. Chalabi, and L. Luksan. Parameter estimation of arma models with garch/aparch errors. an r and splus software implementation. Journal of Statistical Software, 2006.

.. [2] R Implementation: https://www.gamlss.com/wp-content/uploads/2018/01/DistributionsForModellingLocationScaleandShape.pdf