>From EUGENE W. MYERS Department of Computer Science, University of Arizona, Tucson, AZ

## Abstract
Simple O(ND) time and space algorithm is developed where: <br />
N : A + B <br />
D : size of minimum edit script for A and B <br />
E(T) = O(N+D^2) basic stochastic model
* [Stochastic Model](https://en.wikipedia.org/wiki/Stochastic_modelling_(insurance))

Refindment of algorithem requires only O(N) space and use of suffix trees leading to O(N * lg(N) + D^2)
* [Suffix Tree](https://en.wikipedia.org/wiki/Suffix_tree)

### 1.Introduction

> "Recent work improves upon the basic O(N^2) time arbitary alphabet algorithm by being sensitive to other '''problem size parameters'''." (pg 2)

Let L = the length of a longest common subsequence <br />
Le (dual parameter D = 2(N-L) = the length of a shortest edit script), assumming both strings have the same length N. <br />
the 2 best output sentitive algorithms are by:
* "Hirschberg - O(NL+NlgN) and O(DL lg N) time" [Hirschberg's algorithm](https://en.wikipedia.org/wiki/Hirschberg%27s_algorithm)
* "Hunt & Szymanski - O((R+N) lgN) where the parameter R is the total number of ordered pairs of positions at which the two input strings match"
Note that all these algorithms are W(N2 ) or worse in terms of N alone.

In practical situations, it is usually the parameter D that is small.
> Not sure what D is.. D = the length of a shortest edit script? and how is D = 2(N-L)? 
N = Number of elements?
L = length of a longest common subsequence
