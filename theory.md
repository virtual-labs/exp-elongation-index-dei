<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<script>
  MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']]
    }
  };
</script>

### Introduction

The elongation index of an aggregate is the percentage by weight of particles whose greatest dimension (length) is greater than 1.8 times their mean dimension. It quantifies the proportion of needle-shaped or elongated particles in coarse aggregate samples.

### Mechanism

The test evaluates particle shape through dimensional comparison:

#### 1. Dimensional Analysis

- Mean dimension represents average particle size for each sieve fraction  
- Calculated as: Mean Dimension = (Passing Sieve + Retaining Sieve) ÷ 2  
- Critical length threshold = 1.8 × Mean Dimension  

#### 2. Elongation Criterion

- Particles with Length > 1.8 × Mean Dimension classified as elongated  
- Represents significant deviation from equidimensional geometry  
- Factor of 1.8 based on empirical studies correlating shape with performance  

#### 3. Mechanical Gauging

- Length gauge slots sized at 1.8 times mean dimension for each fraction  
- Elongated particles cannot pass through corresponding slot when longest dimension oriented along slot length  
- Non-elongated particles pass freely regardless of orientation  

#### 4. Physical Implications

This assessment identifies particles that:

- Create bridging and arching during compaction  
- Exhibit poor interlocking characteristics  
- Require excessive matrix material for coating  
- Demonstrate preferential fracture planes  
- Reduce aggregate packing efficiency by 10–20%  

### Formulas

#### 1. Individual Fraction Elongation Index

$$
\text{Elongation Index of Fraction} =
\frac{W_e}{W_t} \times 100
$$

Where:  
- $W_e$ = Weight of elongated particles retained on gauge (g)  
- $W_t$ = Total weight of fraction tested (g)  

#### 2. Overall Elongation Index

$$
\text{Overall Elongation Index} =
\frac{\sum W_e}{\sum W_t} \times 100
$$

Where:  
- $\sum W_e$ = Sum of elongated particles from all fractions (g)  
- $\sum W_t$ = Total weight of all fractions tested (g)  

#### 3. Weighted Average Method

$$
\text{Weighted Elongation Index} =
\frac{\sum (P_i \times E_i)}{100}
$$

Where:  
- $P_i$ = Percentage of each size fraction in original sample (\%)  
- $E_i$ = Elongation index of fraction $i$ (\%)  
