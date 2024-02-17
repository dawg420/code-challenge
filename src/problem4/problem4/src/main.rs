fn main(){
    println!("{}", sum_to_n_a(10));
    println!("{}", sum_to_n_b(14));
    println!("{}", sum_to_n_c(15));
}

// recursive
// time complexity - O(n)
fn sum_to_n_a(n:i32) -> i32 {
	if n == 1 {
        return 1;
    } else {
        return n + sum_to_n_a(n-1);
    }
}

// tail-recursive
// time complexity - O(n)
fn sum_to_n_b(n:i32) -> i32 {
	fn accum(n:i32, a:i32) -> i32 {
        if n == 1 {
            return a;
        } else {
            return accum(n-1, n+a);
        }
    }
    return accum(n, 1);
}

// iterative
// time complexity - O(n)
fn sum_to_n_c(n:i32) -> i32 {
	let mut sum = 0;
    let mut i = n;
    while i > 0 {
        sum += i;
        i -= 1;
    }

    return sum;
}
