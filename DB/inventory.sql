
create table inventory(
	pk serial primary key,
	id text,
	product_name text,
	quantity text,
	price text,
	expiration text,
	date_created timestamptz default now(),
	archived boolean default false
);
alter table inventory owner to chrs;