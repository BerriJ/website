+++
title = "Research"
date = "2021-05-27"
draft = false
+++

### Data Driven Identification of Power Plant Operation States Using Clustering

This is in a very early stage and was presented at a PHD Workshop in January 2025.

Presentations: [2025_PHD](../static/slides/25_01_phd)

### rcpptimer: Rcpp Tic-Toc Timer with OpenMP Support

We developed 'cpptimer', a straightforward tic-toc timer class for benchmarking C++ code to address this. Unlike existing solutions, 'cpptimer' supports overlapping timers and OpenMP parallelism. It also calculates summary statistics when benchmarking the same code segment multiple times. Being a header-only library, 'cpptimer' is easily bindable to higher-level languages.

Paper: [Pre-Print](https://arxiv.org/abs/2501.15856)

Presentations: [2024 ISF](../static/slides/24_07_isf) | [2024 useR!](../static/slides/24_07_user) 

### Online Distributional Regression, 2024, Simon Hirsch, Jonathan Berrisch, Florian Ziel

We present a methodology for online estimation of regularized, linear distributional models. The proposed algorithm is based on a combination of recent developments for the online estimation of LASSO models and the well-known GAMLSS framework. We provide a case study on day-ahead electricity price forecasting, in which we show the competitive performance of the incremental estimation combined with strongly reduced computational effort. Our algorithms are implemented in a computationally efficient Python package. 

Paper: [Pre-Print](https://arxiv.org/abs/2407.08750)

### Multivariate Probabilistic CRPS Learning with an Application to Day-Ahead Electricity Prices, 2023, Jonathan Berrisch & Florian Ziel

We apply CRPS Learning to multivariate data. We extend the smoothing methods proposed in the original CRPS Learning paper and we apply the methodology to probabilistic forecasts of multivariate day-ahead electricity prices.

Paper: [Pre-Print](https://doi.org/10.48550/arXiv.2303.10019) | [2023 ECMI](../static/slides/23_06_ecmi) 


### Modeling volatility and dependence of European carbon and energy prices, 2023, Jonathan Berrisch & Sven Pappert & Antonia Arsova & Florian Ziel

We developed a VECM-GARCH-COPULA model for EUA, coal, natural gas and oil prices. We use maximum likelihood to estimate the model parameters and forecast the prices in a one-step process.

Paper: [Finance Research Letters](https://doi.org/10.1016/j.frl.2022.103503) | [Pre-Print](https://doi.org/10.48550/arXiv.2208.14311)

Presentations: [Brown-Bag](../static/slides/23_06_brown_bag) | [ARGE Masterclass](../static/slides/23_07_arge) 

### An Introduction to Rcpp Modules, 2022, Jonathan Berrisch

This is a talk I gave at the UseR! 2022 Conference. It covers the essentials on how to expose C++ classes to R using Rcpp Modules.

Presentations: [UseR!](../static/slides/22_06_useR)

### High-Resolution Peak Demand Estimation Using Generalized Additive Models and Deep Neural Networks, 2022, Jonathan Berrisch & Michal Narajewski & Florian Ziel

This paper presents a method for estimating high-resolution electricity peak demand given lower resolution data.

Paper: [Energy and AI](https://doi.org/10.1016/j.egyai.2023.100236) | [Pre-Print](https://arxiv.org/abs/2203.03342)

Presentations: [Brown-Bag](../static/slides/22_05_brown_bag) | [2022 ISF](../static/slides/22_07_isf) | [2023 INREC](../static/slides/23_09_inrec) | [2023 Statistische Woche](../static/slides/23_09_stat_woche) 

### CRPS Learning, 2021, Jonathan Berrisch & Florian Ziel, Journal of Econometrics

This paper treats how online learning algorithms can be used for the pointwise combination of probabilistic forecasts.

Paper: [Journal of Econometrics](https://doi.org/10.1016/j.jeconom.2021.11.008) | [Pre-Print](https://arxiv.org/abs/2102.00968)

Presentations: [2021 Causal Inference Group, France](../static/slides/21_05_france) | [2021 ISF](../static/slides/21_06_isf) | [2021 EPF Group](../static/slides/21_11_epf) | [2022 15TH RGS Doctoral Conference](../static/slides/22_02_rgs) [2022 ICCF](../static/slides/22_06_iccf)

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