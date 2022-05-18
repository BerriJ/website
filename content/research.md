+++
title = "Research"
date = "2021-05-27"
draft = false
+++

### High-Resolution Peak Demand Estimation Using Generalized Additive Models and Deep Neural Networks, 2022, Jonathan Berrisch & Michal Narajewski & Florian Ziel

This paper presents a method for estimating high-resolution electricity peak demand given lower resolution data.

Paper: [Pre-Print](https://arxiv.org/abs/2203.03342)

Presentations: [Brown-Bag](../slides/22_05_brown_bag)

### CRPS Learning, 2021, Jonathan Berrisch & Florian Ziel, Journal of Econometrics

This paper treats how online learning algorithms can be used for the pointwise combination of probabilistic forecasts.

Paper: [Elsevier](https://doi.org/10.1016/j.jeconom.2021.11.008) | [Pre-Print](https://arxiv.org/abs/2102.00968)

Presentations: [2021 Causal Inference Group, France](../slides/21_05_france) | [2021 ISF](../slides/21_06_isf) | [2021 EPF Group](../slides/21_11_epf) | [2022 15TH RGS Doctoral Conference](../slides/22_02_rgs)

### Distributional modeling and forecasting of natural gas prices, 2021, Jonathan Berrisch & Florian Ziel

This paper presents price forecasting studies for two essential European natural-gas products.

Paper: [Wiley](https://doi.org/10.1002/for.2853) | [Pre-Print](https://arxiv.org/abs/2010.06227) 

# Projects

## profoc - An R Package for Probabilistic Forecast Combination

This package implements methods which are proposed and discussed in [CRPS Learning](https://arxiv.org/abs/2102.00968).

[CRAN](https://cran.rstudio.com/web/packages/profoc/index.html) | [GitHub](https://github.com/BerriJ/profoc) | [Documentation](https://profoc.berrisch.biz/)

## dccpp - An R Package for fast computation of the distance covariance and distance correlation

The computation cost is only O(n log(n)) for the distance correlation (see Chaudhuri, Hu, 2019, arXiv, elsevier). The functions are written entirely in C++ to speed up the computation.

[CRAN](https://cran.r-project.org/web/packages/dccpp/index.html) | [GitHub](https://github.com/BerriJ/dccpp) | [Documentation](https://dccpp.berrisch.biz/)

## sstudentt - A python package implementing the skewed-student-t distribution

This package implements the skewed student-t distribution in python. Parameterized as described in Wurtz et. al (2006) [1]. An implementation in R is already existent [2].

[PyPi](https://pypi.org/project/sstudentt/) | [Github](https://github.com/BerriJ/sstudentt/edit/master/README.rst) | [Documentation](https://sstudentt.readthedocs.io/en/latest/)

# Development

I develop most of my projects in a docker container that is publicly available for reuse and inspiration. This container makes it easy to reproduce results or develop projects like the profoc R package.

The most convenient way to start is using VS-Code. You can find instructions in the [GitHub Repo](https://github.com/BerriJ/devenv/tree/dev). However, the bare-bone Docker Container is also available and sufficient.

The Repository is available on [GitHub](https://github.com/BerriJ/devenv/tree/dev).

The docker container is also available on [GitHub](https://github.com/users/BerriJ/packages/container/devenv/versions)


# References

.. [1] Wurtz, Y. Chalabi, and L. Luksan. Parameter estimation of arma models with garch/aparch errors. an r and splus software implementation. Journal of Statistical Software, 2006.

.. [2] R Implementation: https://www.gamlss.com/wp-content/uploads/2018/01/DistributionsForModellingLocationScaleandShape.pdf