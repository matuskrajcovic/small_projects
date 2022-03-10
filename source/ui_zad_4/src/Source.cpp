#include <iostream>
#include <fstream>
#include <string>
#include <vector>


using str = std::string;
using c_str = const std::string;
using vec_str = std::vector<std::string>;
using vec_vec_str = std::vector<std::vector<std::string>>;


//---------------------------------------

vec_str FACTS;					//fakty, postupne pribudaju
vec_vec_str RULES;				//pravdive pravidla, nemenia sa
str X, Y, Z;					//aktualne hodnoty premennych, s ktorymi prave pracujeme
vec_str NEW_FACTS;				//nove fakty


//---------------------------------------

//nacitame fakty a pravidla z externeho suboru
bool load_files(c_str& facts_path, c_str& rules_path);

//rozdeli string na vektor stringov
vec_str split_string(c_str& src, c_str& delimeter);

//rekurzivna funkcia, snazi sa aplikovat pravidla
void try_to_apply(vec_str rules, int rule_index);

//zisti, si sa na konkretnu podmienku da aplikovat nejaky fakt
bool possible_to_apply(c_str& fact, c_str& rule);

//vykonanie akcie
void execute_command(str command);

//zisti, ci sa vzor nachadza v baze faktov
bool is_a_fact(c_str& str);


//---------------------------------------

int main(int argc, char** argv) {

	str facts_file, rules_file;
	if (argc >= 3) {
		facts_file = str(argv[1]);
		rules_file = str(argv[2]);
	}
	else {
		facts_file = "facts.txt";
		rules_file = "rules.txt";
	}

	if (!load_files(facts_file, rules_file))
		exit(-1);

	while (true) {

		for (unsigned int i = 0; i < RULES.size(); i++) {
			vec_str rules = split_string(RULES[i][1], " & ");
			X = "", Y = "", Z = "";
			try_to_apply(rules, i);
		}

		if (NEW_FACTS.size() > 0) {
			FACTS.push_back(NEW_FACTS[0]);
			NEW_FACTS.clear();
		}
		else {
			break;
		}
	}

	for (unsigned int i = 0; i < FACTS.size(); i++)
		std::cout << FACTS[i] << '\n';
}


vec_str split_string(c_str &src, c_str &delimeter) {
	vec_str rules;
	str temp(src);
	int index = 0;
	while ((index = temp.find(delimeter)) >= 0) {
		rules.push_back(temp.substr(0, index));
		temp.erase(0, index + delimeter.size());
	}
	rules.push_back(temp);
	return rules;
}

bool is_a_fact(c_str &str) {
	for (auto it = FACTS.begin(); it != FACTS.end(); it++) {
		if (!it->compare(str))
			return true;
	}
	return false;
}

void execute_command(str command) {
	if (command.find("pridaj") >= 0) {
		command.erase(0, 7);
		if (!is_a_fact(command)) //{
			NEW_FACTS.push_back(command);
			//edited = true;
		//}	
	}
}

bool possible_to_apply(c_str& fact, c_str& rule) {
	vec_str fact_vect = split_string(fact, " ");
	vec_str rule_vect = split_string(rule, " ");
	
	//ak fakt a pravidlo nemaju rovnaku dlzku, nemozeme aplikovat
	if (fact_vect.size() != rule_vect.size() || !fact.compare(rule))
		return false;

	//ak mame pravidlo nerovnosti, musime zistit, ci sa nam premenne nerovnaju
	if (!rule_vect[0].compare("<>")) {
		if (!rule_vect[1].compare("?X") && !rule_vect[2].compare("?Y") || !rule_vect[1].compare("?Y") && !rule_vect[2].compare("?X")) return X.compare(Y);
		if (!rule_vect[1].compare("?X") && !rule_vect[2].compare("?Z") || !rule_vect[1].compare("?Z") && !rule_vect[2].compare("?X")) return X.compare(Z);
		if (!rule_vect[1].compare("?Z") && !rule_vect[2].compare("?Y") || !rule_vect[1].compare("?Y") && !rule_vect[2].compare("?Z")) return Z.compare(Y);
	}

	//inak musime prejst kazdu jednu polozku pravidla
	for (unsigned int i = 0; i < rule_vect.size(); i++) {

		//ak je premenna X prazdna, nahradime ju menom z faktu, inak sa nam musi X rovnat premennej z faktu
		if (!rule_vect[i].compare("?X")) {
			if (!X.compare(""))
				X = fact_vect[i];
			else if (X.compare(fact_vect[i]))
				return false;
		}
		else if (!rule_vect[i].compare("?Y")) {
			if (!Y.compare(""))
				Y = fact_vect[i];
			else if (Y.compare(fact_vect[i]))
				return false;
		}
		else if (!rule_vect[i].compare("?Z")) {
			if (!Z.compare(""))
				Z = fact_vect[i];
			else if (Z.compare(fact_vect[i]))
				return false;
		}

		//pokial nejde o vzor, tak sa musi polozka z faktu rovnat tej z pravidla
		else if (rule_vect[i].compare(fact_vect[i]))
			return false;
	}
	return true;
}

void try_to_apply(vec_str rules, int rule_index) {
	str x(X), y(Y), z(Z);
	
	//ak sa dostaneme cez vsetky podmienky, mozeme aplikovat s nahradenymi premennymi
	if (rules.size() == 0) {
		str command(RULES[rule_index][2]);
		if(command.find("?X") != str::npos)
			command.replace(command.find("?X"), 2, X);
		if (command.find("?Y") != str::npos)
			command.replace(command.find("?Y"), 2, Y);
		if (command.find("?Z") != str::npos)
			command.replace(command.find("?Z"), 2, Z);
		execute_command(command);
		return;
	}

	//prechadzame vsetkymi faktami a snazime sa ich aplikovat na aktualne pravidlo
	for (unsigned int i = 0; i < FACTS.size(); i++) {
		if (possible_to_apply(FACTS[i], rules[0])) {
			try_to_apply(vec_str(rules.begin() + 1, rules.end()), rule_index);
		}
		X = x; Y = y; Z = z;
	}
}

bool load_files(c_str& facts_path, c_str& rules_path) {
	std::ifstream facts_file, rules_file;
	facts_file.open(facts_path);
	if (!facts_file.is_open())
		return false;
	str line;
	while (std::getline(facts_file, line)) {
		FACTS.push_back(line);
	}
	facts_file.close();
	rules_file.open(rules_path);
	if (!rules_file.is_open())
		return false;
	while (std::getline(rules_file, line)) {
		RULES.push_back(vec_str());
		for (uint8_t i = 0; i < 3; i++) {
			RULES.back().push_back(line.erase(0,6));
			std::getline(rules_file, line);
		}
	}
	rules_file.close();
	return true;
}
