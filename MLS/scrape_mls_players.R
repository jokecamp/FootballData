# Load packages
library(XML)
library(plyr)
library(ggvis)

# Scrape the first table of MLS player data and transform it into a data frame
url1 <- "http://www.mlssoccer.com/players"
data1 <- readHTMLTable(url1, stringsAsFactors = FALSE)
data1[[1]] # select the first table
data1 <- as.data.frame(data1)

# clean up the column names
names(data1) <- c("player_num", "position", "player_name", "club", "age", "height", 
                  "weight", "birthplace", "status")
# Delete extra column
data1[10] <- NULL

# Create function to scrape each MLS player site
fetch_data <- function(page_num) {
  url2 <- paste0("http://www.mlssoccer.com/players?page=", page_num)
  data2 <- readHTMLTable(url2, stringsAsFactors = FALSE)
  data2 <- data2[[1]]
  data2$page_num <- page_num
  data2
}

# Scrape the other MLS player tables
mls_players <- ldply(1:13, fetch_data, .progress="text")

# Delete extra columns 
mls_players[11] <- NULL
mls_players[10] <- NULL

# Clean up the column names
names(mls_players) <- c("player_num", "position", "player_name", "club", "age", "height", 
                        "weight", "birthplace", "status")

'''To join two data frames (datasets) vertically, use the rbind function.
The two data frames must have the same variables, but they do not have to 
be in the same order.'''

# Join the data frames
df <- rbind(data1, mls_players)

# Reformat the class of numeric columns
df$player_num <- as.numeric(df$player_num)
df$age <- as.numeric(df$age)
df$weight <- as.numeric(df$weight)
