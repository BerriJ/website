+++
title = "Research"
date = "2021-05-27"
draft = false
+++

### Multivariate Probabilistic CRPS Learning with an Application to Day-Ahead Electricity Prices

We apply CRPS Learning to multivariate data. We extend the smoothing methods proposed in the original CRPS Learning paper and we apply the methodology to probabilistic forecasts of multivariate day-ahead electricity prices.

Paper: [Pre-Print](https://doi.org/10.48550/arXiv.2303.10019)


### Modeling volatility and dependence of European carbon and energy prices

We developed a VECM-GARCH-COPULA model for EUA, coal, natural gas and oil prices. We use maximum likelihood to estimate the model parameters and forecast the prices in a one-step process.

Paper: [Finance Research Letters](https://doi.org/10.1016/j.frl.2022.103503) | [Pre-Print](https://doi.org/10.48550/arXiv.2208.14311)

Presentations: [Brown-Bag](../slides/23_06_brown_bag) 

### An Introduction to Rcpp Modules

This is a talk I gave at the UseR! 2022 Conference. It covers the essentials on how to expose C++ classes to R using Rcpp Modules.

Presentations: [UseR!](../slides/22_06_useR)

### High-Resolution Peak Demand Estimation Using Generalized Additive Models and Deep Neural Networks, 2022, Jonathan Berrisch & Michal Narajewski & Florian Ziel

This paper presents a method for estimating high-resolution electricity peak demand given lower resolution data.

Paper: [Energy and AI](https://doi.org/10.1016/j.egyai.2023.100236) | [Pre-Print](https://arxiv.org/abs/2203.03342)

Presentations: [Brown-Bag](../slides/22_05_brown_bag) | [2022 ISF](../slides/22_07_isf) 

### CRPS Learning, 2021, Jonathan Berrisch & Florian Ziel, Journal of Econometrics

This paper treats how online learning algorithms can be used for the pointwise combination of probabilistic forecasts.

Paper: [Journal of Econometrics](https://doi.org/10.1016/j.jeconom.2021.11.008) | [Pre-Print](https://arxiv.org/abs/2102.00968)

Presentations: [2021 Causal Inference Group, France](../slides/21_05_france) | [2021 ISF](../slides/21_06_isf) | [2021 EPF Group](../slides/21_11_epf) | [2022 15TH RGS Doctoral Conference](../slides/22_02_rgs) [2022 ICCF](../slides/22_06_iccf)

### Distributional modeling and forecasting of natural gas prices, 2021, Jonathan Berrisch & Florian Ziel

This paper presents price forecasting studies for two essential European natural-gas products.

Paper: [Journal of Forecasting](https://doi.org/10.1002/for.2853) | [Pre-Print](https://arxiv.org/abs/2010.06227) 

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